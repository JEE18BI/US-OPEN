import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./LiveMatches.css";

export default function LiveMatches() {
    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [matchType, setMatchType] = useState("");
    const [selectedBlock, setSelectedBlock] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch CSV
    useEffect(() => {
        setIsLoading(true);
        const url =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSg6N83JtidM2JSwQt_L7b3Qx6oCa00MmvKk6QbRvHEc7x2_ocHkfFH31gQ7RDnwNgGBBh8A9k-yjGa/pub?output=csv";

        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            transformHeader: (h) => h.trim(),
            complete: (results) => {
                const filtered = results.data.filter((row) => row["MATCH PLAYERS"]?.trim());
                setMatches(filtered);
                setIsLoading(false);
            },
            error: (err) => {
                console.error("CSV parse error:", err);
                setIsLoading(false);
            },
        });
    }, []);

    if (isLoading) return <div className="loader-spinner">Loading...</div>;

    // Dropdown options
    const matchTypes = Array.from(new Set(matches.map((m) => m["MATCH TYPE"])));
    const blocks = matchType
        ? Array.from(
            new Set(
                matches
                    .filter((m) => m["MATCH TYPE"] === matchType)
                    .map((m) => m["BLOCK / ROUND"])
            )
        )
        : [];
    const days =
        matchType && selectedBlock
            ? Array.from(
                new Set(
                    matches
                        .filter(
                            (m) => m["MATCH TYPE"] === matchType && m["BLOCK / ROUND"] === selectedBlock
                        )
                        .map((m) => m.DAY)
                )
            )
            : [];

    // Filtered matches: only filter if searchTerm or dropdowns selected
    const filteredMatches =
        searchTerm || matchType || selectedBlock || selectedDay
            ? matches
                .filter((m) =>
                    m["MATCH PLAYERS"].toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter((m) => (matchType ? m["MATCH TYPE"] === matchType : true))
                .filter((m) => (selectedBlock ? m["BLOCK / ROUND"] === selectedBlock : true))
                .filter((m) => (selectedDay ? m.DAY === selectedDay : true))
            : [];

    return (
        <div className="live-matches-page">
            <div className="matches-header">
                <h1>Matches</h1>


                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search by player name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="match-search-input"
                />

                {/* Dropdowns */}
                <div className="view-dropdowns">
                    <select
                        value={matchType}
                        onChange={(e) => {
                            setMatchType(e.target.value);
                            setSelectedBlock("");
                            setSelectedDay("");
                        }}
                    >
                        <option value="">Select Match Type</option>
                        {matchTypes.map((mt) => (
                            <option key={mt} value={mt}>
                                {mt}
                            </option>
                        ))}
                    </select>

                    {blocks.length > 0 && (
                        <select
                            value={selectedBlock}
                            onChange={(e) => {
                                setSelectedBlock(e.target.value);
                                setSelectedDay("");
                            }}
                        >
                            <option value="">Select Block / Round</option>
                            {blocks.map((b) => (
                                <option key={b} value={b}>
                                    {b}
                                </option>
                            ))}
                        </select>
                    )}

                    {days.length > 0 && (
                        <select
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value)}
                        >
                            <option value="">Select Day</option>
                            {days.map((d) => (
                                <option key={d} value={d}>
                                    {d}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>

            {/* Matches table */}
            {filteredMatches.length > 0 ? (
                <div className="table-wrapper">
                    <div className="matches-scroll">
                        <table className="matches-table">
                            <thead>
                            <tr>
                                <th>Match Type</th>
                                <th>Block / Round</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Court</th>
                                <th>Match Players</th>
                                <th>Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredMatches.map((m, i) => (
                                <tr key={i}>
                                    <td data-label="Match Type"><span>{m["MATCH TYPE"]}</span></td>
                                    <td data-label="Block / Round"><span>{m["BLOCK / ROUND"]}</span></td>
                                    <td data-label="Day"><span>{m.DAY}</span></td>
                                    <td data-label="Time"><span>{m.TIME}</span></td>
                                    <td data-label="Court"><span>{m.COURT}</span></td>
                                    <td data-label="Match Players"><span>{m["MATCH PLAYERS"]}</span></td>
                                    <td data-label="Score"><span>{m.SCORE}</span></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    {/* This div creates the white fade effect on mobile */}
                    <div className="scroll-gradient-overlay"></div>
                </div>
            ) : searchTerm || matchType || selectedBlock || selectedDay ? (
                <p className="no-matches">No matches found for your search or filters.</p>
            ) : (
                <p className="no-matches">Please select a match type, block/round, day, or search for a player to view matches.</p>
            )}
        </div>
    );
}
