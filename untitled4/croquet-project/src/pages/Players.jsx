import "./Players.css";
import ReactCountryFlag from "react-country-flag";
import { useMemo, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const playersData = [
    {
        country: "USA",
        code: "US",
        players: [
            {
                id: 1,
                name: "Matthew Essick",
                dgrade: 2677,
                photo: "/players/matthewessick.jpg",
                highlights: [
                    "#2 ranked GC player in the world",
                    "#1 ranked GC player in the USA",
                    "World GC Teams Champion 2025",
                    "USA National GC Doubles Champion 2025",
                    "USA National GC Singles Champion 2021, 2022, 2024, 2025",
                    "World GC Champion 2022",
                ],
            },
            {
                id: 2,
                name: "Thomas (Tom) Balding V",
                dgrade: 2563,
                photo: "/players/thomasbalding.jpg",
                highlights: [
                    "#9 ranked GC player in the world",
                    "World GC Teams Champion 2025",
                    "USA GC Doubles National Champion 2023",
                ],
            },
            {
                id: 3,
                name: "Kyle Maloof",
                dgrade: 2444,
                photo: "/players/kylemaloof.jpg",
                highlights: ["USA National GC Doubles Champion 2022, 2024"],
            },
            {
                id: 4,
                name: "Zack Watson",
                dgrade: 2385,
                photo: "/players/zackwatson.jpg",
                highlights: [],
            },
            {
                id: 5,
                name: "Stephen Morgan",
                dgrade: 2368,
                photo: "/players/stephenmorgan.jpg",
                highlights: [
                    "World GC Teams Champion 2025",
                    "USA GC Doubles National Champion 2017",
                ],
            },
            {
                id: 6,
                name: "Tamer Hatata",
                dgrade: 2318,
                photo: "/players/tamerhatata.jpg",
                highlights: [],
            },
            {
                id: 7,
                name: "Darin Guffey",
                dgrade: 2313,
                photo: "/players/daringuffey.jpg",
                highlights: [],
            },
            {
                id: 8,
                name: "Ahab Abdelwahab",
                dgrade: 2312,
                photo: "/players/ahababdelwahab.jpg",
                highlights: [],
            },
            {
                id: 9,
                name: "Danny Huneycutt",
                dgrade: 2270,
                photo: "/players/dannyhuneycutt.jpg",
                highlights: [],
            },
            {
                id: 10,
                name: "Macey White",
                dgrade: 2266,
                photo: "/players/maceywhite.jpg",
                highlights: [
                    "Canadian National Championship Finalist 2025",
                    "Swiss National Championship Finalist 2025",
                ],
            },
            {
                id: 11,
                name: "Kent Lovvorn",
                dgrade: 2195,
                photo: "/players/kentlovvorn.jpg",
                highlights: [],
            },
            {
                id: 12,
                name: "Rania Gabr",
                dgrade: 2163,
                photo: "/players/raniagabr.jpg",
                highlights: [],
            },
            {
                id: 13,
                name: "Mohammad (Kimo) Kamal",
                dgrade: 2116,
                photo: "/players/mohammadkamal.jpg",
                highlights: [
                    "USA GC Doubles National Champion 2021",
                    "USA Croquet Hall of Fame 2021",
                    "USA GC Singles National Champion 1999, 2007, 2009",
                ],
            },
        ],
    },

    {
        country: "EGYPT",
        code: "EG",
        players: [
            {
                id: 1,
                name: "Ahmed Elmahdy",
                dgrade: 2627,
                photo: "/players/ahmedelmahdy.jpg",
                highlights: [
                    "#1 GC ranked player in Egypt",
                    "#4 GC ranked player in the World",
                    "GC World Champion 2015",
                    "GC Over 50 World Champion 2023",
                    "Egyptian Cup GC Team Champion (many times)",
                    "Egyptian National League GC Team Champion (many times)",
                ],
            },
            {
                id: 2,
                name: "Yasser Sayed",
                dgrade: 2576,
                photo: "/players/yassersayed.jpg",
                highlights: ["#7 ranked GC player in the world", "Egyptian Open Finalist 2025"],
            },
            {
                id: 3,
                name: "Mohamed (Moe) Karem",
                dgrade: 2558,
                photo: "/players/mohamedkarem.jpg",
                highlights: ["#11 ranked GC player in the world"],
            },
            {
                id: 4,
                name: "Soha Moustafa",
                dgrade: 2518,
                photo: "/players/sohamoustafa.jpg",
                highlights: [
                    "#1 ranked GC woman in the world",
                    "#19 ranked GC player in the world",
                    "Women’s World GC Champion 2019",
                    "Women’s World GC Finalist 2023",
                ],
            },
            { id: 5, name: "Omar Fahmy", dgrade: 2389, photo: "/players/omarfahmy.jpg", highlights: [] },
            { id: 6, name: "Seif Elyamany", dgrade: 2326, photo: "/players/seifelyamany.jpg", highlights: [] },
            {
                id: 7,
                name: "Jana Elsaeed",
                dgrade: 2229,
                photo: "/players/janaelsaeed.jpg",
                highlights: ["#13 ranked GC woman in the world"],
            },
            {
                id: 8,
                name: "Yasser Fathi",
                dgrade: 2228,
                photo: "/players/yasserfathi.jpg",
                highlights: [
                    "GC Over 50 World Championship Finalist 2018",
                    "Egyptian GC Men's Singles Championship Finalist (twice)",
                    "Egyptian Cup GC Team Champion",
                    "Egyptian National League GC Team Champion",
                ],
            },
            {
                id: 9,
                name: "Salah Hassan",
                dgrade: 2150,
                photo: "/players/salahhassan.jpg",
                highlights: [
                    "GC Over 50 World Champion 2014",
                    "GC World Champion Finalist 2002, 2006",
                    "GC World Champion 1997, 2000",
                ],
            },
            {id : 10,
            name :"Fawzy Helmy",
                dgrade: 2525,
                photo: "/players/fawzyhelmy.jpg",
                highlights: [],
            }

        ],
    },

    {
        country: "South Africa",
        code: "ZA",
        players: [
            {
                id: 1,
                name: "Reg Bamford",
                dgrade: 2627,
                photo: "/players/regbamford.jpg",
                highlights: [
                    "#1 ranked GC player in South Africa",
                    "#3 ranked GC player in the world",
                    "GC World Champion 2008, 2013, 2017",
                ],
            },
        ],
    },

    {
        country: "England",
        code: "ENG",
        players: [
            { id: 1, name: "Guy Scurfield", dgrade: 2121, photo: "/players/guyscurfield.jpg", highlights: [] },
        ],
    },

    {
        country: "New Zealand",
        code: "NZ",
        players: [
            {
                id: 1,
                name: "Edmund J Fordyce",
                dgrade: 2514,
                photo: "/players/edmundfordyce.jpg",
                highlights: [
                    "#1 ranked GC player in New Zealand",
                    "#20 ranked GC player in the world",
                    "USA National GC Doubles Champion 2025",
                    "Under 21 GC World Champion 2019",
                ],
            },
        ],
    },

    {
        country: "Mexico",
        code: "MX",
        players: [
            {
                id: 1,
                name: "Brian Lozano",
                dgrade: 2342,
                photo: "/players/brianlozano.jpg",
                highlights: [
                    "#1 GC ranked player in Mexico",
                    "Canada GC Open Champion 2003",
                    "Tier 3 Teams GC World Champion 2022",
                    "Mexico GC Open Champion 2022, 2023",
                ],
            },
        ],
    },

    {
        country: "Australia",
        code: "AU",
        players: [
            {
                id: 1,
                name: "Greg Fletcher",
                dgrade: 2363,
                photo: "/players/gregfletcher.jpg",
                highlights: ["Australian GC Open Singles Champion 2016", "Australian Open GC Doubles Champion 2025"],
            },
        ],
    },

    {
        country: "Spain",
        code: "ES",
        players: [
            {
                id: 1,
                name: "Juan (Juanin) Ojeda Ayesta",
                dgrade: 2234,
                photo: "/players/juanojeda.jpg",
                highlights: ["Spanish Open Champion 2025"],
            },
            {
                id: 2,
                name: "Begoña Elzaburu",
                dgrade: 2145,
                photo: "/players/begonaelzaburu.jpg",
                highlights: [
                    "European GC Women’s Champion 2022",
                    "Spanish GC National Club Teams Champion 2023, 2024, 2025",
                    "Spanish Singles Finalist 2025",
                ],
            },
        ],
    },

    {
        country: "Canada",
        code: "CA",
        players: [
            {
                id: 1,
                name: "Adam Barr",
                dgrade: 2177,
                photo: "/players/adambarr.jpg",
                highlights: ["Canadian National GC Champion 2024, 2025"],
            },
            { id: 2, name: "Amr Hamdy", dgrade: 2144, photo: "/players/amrhamdy.jpg", highlights: [] },
        ],
    },
];

export default function Players() {
    const [flippedId, setFlippedId] = useState(null);

    // ✅ flatten + sort
    const allPlayers = useMemo(() => {
        const flat = playersData.flatMap((group) =>
            group.players.map((p) => ({
                ...p,
                country: group.country,
                code: group.code,
                uniqueId: `${group.code}-${p.id}`,
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

            <div className="players-grid">
                {allPlayers.map((player) => {
                    const isFlipped = flippedId === player.uniqueId;

                    return (
                        <div
                            key={player.uniqueId}
                            className={`player-flip-card ${isFlipped ? "flipped" : ""}`}
                            onClick={() => setFlippedId(isFlipped ? null : player.uniqueId)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="player-flip-inner">
                                {/* FRONT (EXACT SAME DESIGN) */}
                                <div className="player-flip-front player-card2">
                                    <div className="player-avatar">
                                        <img src={player.photo || "/placeholder.jpg"} alt={player.name} />
                                    </div>

                                    <div className="player-info">
                                        <h3 className="player-name2">{player.name}</h3>
                                        <p className="player-dgrade2">D-Grade: {player.dgrade}</p>

                                        <div className="player-country">
                                            {player.code === "ENG" ? (
                                                <img src="/England.png" alt="England Flag" className="flag-icon" />
                                            ) : (
                                                <ReactCountryFlag countryCode={player.code} svg className="flag-icon" />
                                            )}
                                            <span>{player.country}</span>
                                        </div>

                                        <p className="tap-hint">Tap for details</p>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="player-flip-back">
                                    <div className="back-header">
                                        <div className="back-name">{player.name}</div>
                                        <div className="back-sub">
                                            {player.country} • D-Grade {player.dgrade}
                                        </div>
                                    </div>

                                    <div className="back-body">
                                        {player.highlights?.length > 0 ? (
                                            <ul className="back-highlights">
                                                {player.highlights.map((h, idx) => (
                                                    <li key={idx}>{h}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="back-muted">More info coming soon.</p>
                                        )}
                                    </div>

                                    <div className="back-footer">Tap to go back</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
