import "./Players.css";
import ReactCountryFlag from "react-country-flag";
import { useMemo, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const playersData = [
    {
        country: "USA",
        code: "US",
        players: [
            { id: 1, name: "Matthew Essick", dgrade: 2677, photo: "/players/matthewessick.jpg" },
            { id: 2, name: "Thomas Balding", dgrade: 2563, photo: "/players/thomasbalding.jpg" },
            { id: 3, name: "Kyle Maloof", dgrade: 2444, photo: "/players/kylemaloof.jpg" },
            { id: 4, name: "Zack Watson", dgrade: 2385, photo: "/players/zackwatson.jpg" },
            { id: 5, name: "Stephen Morgan", dgrade: 2368, photo: "/players/stephenmorgan.jpg" },
            { id: 6, name: "Tamer Hatata", dgrade: 2318, photo: "/players/tamerhatata.jpg" },
            { id: 7, name: "Darin Guffey", dgrade: 2313, photo: "/players/daringuffey.jpg" },
            { id: 8, name: "Ahab Abdelwahab", dgrade: 2312, photo: "/players/ahababdelwahab.jpg" },
            { id: 9, name: "Danny Huneycutt", dgrade: 2270, photo: "/players/dannyhuneycutt.jpg" },
            { id: 10, name: "Macey White", dgrade: 2266, photo: "/players/maceywhite.jpg" },
            { id: 11, name: "Kent Lovvorn", dgrade: 2195, photo: "/players/kentlovvorn.jpg" },
            { id: 12, name: "Rania Gabr", dgrade: 2163, photo: "/players/raniagabr.jpg" },
            { id: 13, name: "Mohammad Kamal", dgrade: 2116, photo: "/players/mohammadkamal.jpg" }, // ✅ ADDED
        ],
    },

    {
        country: "EGYPT",
        code: "EG",
        players: [
            { id: 1, name: "Ahmed Elmahdy", dgrade: 2627, photo: "/players/ahmedelmahdy.jpg" },
            { id: 2, name: "Yasser Sayed", dgrade: 2576, photo: "/players/yassersayed.jpg" },
            { id: 3, name: "Mohamed Karem", dgrade: 2558, photo: "/players/mohamedkarem.jpg" },
            { id: 4, name: "Soha Moustafa", dgrade: 2518, photo: "/players/sohamoustafa.jpg" },
            { id: 5, name: "Omar Fahmy", dgrade: 2389, photo: "/players/omarfahmy.jpg" },
            { id: 6, name: "Seif Elyamany", dgrade: 2326, photo: "/players/seifelyamany.jpg" },
            { id: 7, name: "Jana Elsaeed", dgrade: 2229, photo: "/players/janaelsaeed.jpg" },
            { id: 8, name: "Yasser Fathi", dgrade: 2228, photo: "/players/yasserfathi.jpg" },
            { id: 9, name: "Salah Hassan", dgrade: 2150, photo: "/players/salahhassan.jpg" },
        ],
    },

    {
        country: "South Africa",
        code: "ZA",
        players: [
            { id: 1, name: "Reg Bamford", dgrade: 2627, photo: "/players/regbamford.jpg" },
        ],
    },

    {
        country: "England",
        code: "ENG",
        players: [

            { id: 2, name: "Guy Scurfield", dgrade: 2121, photo: "/players/guyscurfield.jpg" },
        ],
    },

    {
        country: "New Zealand",
        code: "NZ",
        players: [
            { id: 1, name: "Edmund J Fordyce", dgrade: 2514, photo: "/players/edmundfordyce.jpg" },
        ],
    },

    {
        country: "Mexico",
        code: "MX",
        players: [
            { id: 1, name: "Brian Lozano", dgrade: 2342, photo: "/players/brianlozano.jpg" },
        ],
    },

    {
        country: "Australia",
        code: "AU",
        players: [
            { id: 1, name: "Greg Fletcher", dgrade: 2363, photo: "/players/gregfletcher.jpg" },
        ],
    },

    {
        country: "Spain",
        code: "ES",
        players: [
            { id: 1, name: "Juan Ojeda", dgrade: 2234, photo: "/players/juanojeda.jpg" },
            { id: 2, name: "Begoña Elzaburu", dgrade: 2145, photo: "/players/begonaelzaburu.jpg" },
        ],
    },

    {
        country: "Canada",
        code: "CA",
        players: [
            { id: 1, name: "Adam Barr", dgrade: 2177, photo: "/players/adambarr.jpg" },
            { id: 2, name: "Amr Hamdy", dgrade: 2144, photo: "/players/amrhamdy.jpg" },
        ],
    },
];


export default function Players() {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    // ✅ flatten all players + attach country info + sort alphabetically
    const allPlayers = useMemo(() => {
        const flat = playersData.flatMap((group) =>
            group.players.map((p) => ({
                ...p,
                country: group.country,
                code: group.code,
                uniqueId: `${group.code}-${p.id}`, // prevents duplicate keys
            }))
        );

        return flat.sort((a, b) => a.name.localeCompare(b.name));
    }, []);

    return (
        <div className="players-page">
            <div className="players-header">
                <h1>Players 🌍</h1>
                <p className="players-intro">Meet all competitors of the US Open 2026</p>
            </div>

            {/* ✅ Alphabetical Grid */}
            <div className="players-grid">
                {allPlayers.map((player) => (
                    <div key={player.uniqueId} className="player-card2">
                        <div
                            className="player-avatar"
                            onClick={() => setSelectedPlayer(player.photo)}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={player.photo || "/placeholder.jpg"} alt={player.name} />
                        </div>

                        <div className="player-info">
                            <h3 className="player-name2">{player.name}</h3>
                            <p className="player-dgrade2">D-Grade: {player.dgrade}</p>

                            <div className="player-country">
                                {player.code === "ENG" ? (
                                    <img src="/England.png" alt="England Flag" className="flag-icon" />
                                ) : (
                                    <ReactCountryFlag
                                        countryCode={player.code}
                                        svg
                                        className="flag-icon"
                                    />
                                )}
                                <span>{player.country}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ modal */}
            {selectedPlayer && (
                <div className="player-modal" onClick={() => setSelectedPlayer(null)}>
          <span className="close-btn" onClick={() => setSelectedPlayer(null)}>
            &times;
          </span>
                    <img src={selectedPlayer} alt="Player" />
                </div>
            )}
        </div>
    );
}
