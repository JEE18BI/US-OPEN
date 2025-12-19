import './Players.css';
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const playersData = [
    {
        country: "USA",
        code: "US",
        players: [
            { id: 1, name: "Matthew Essick", photo: "/players/matthewessick.jpg" },
            { id: 2, name: "Thomas Balding", photo: "/players/thomasbalding.jpg" },
            { id: 3, name: "Kyle Maloof", photo: "/players/kylemaloof.jpg" },
            { id: 4, name: "Zack Watson", photo: "/players/zackwatson.jpg" },
            { id: 5, name: "Stephen Morgan", photo: "/players/stephenmorgan.jpg" },
            { id: 6, name: "Tamer Hatata", photo: "/players/tamerhatata.jpg" },
            { id: 7, name: "Darin Guffey", photo: "/players/daringuffey.jpg" },
            { id: 8, name: "Ahab Abdelwahab", photo: "/players/ahababdelwahab.jpg" },
            { id: 9, name: "Danny Huneycutt", photo: "/players/dannyhuneycutt.jpg" },
            { id: 10, name: "Macey White", photo: "/players/maceywhite.jpg" },
            { id: 11, name: "Kent Lovvorn", photo: "/players/kentlovvorn.jpg" },
            { id: 12, name: "Rania Gabr", photo: "/players/raniagabr.jpg" },
        ]
    },
    {
        country: "EGYPT",
        code: "EG",
        players: [
            { id: 1, name: "Ahmed Elmahdy", photo: "/players/ahmedelmahdy.jpg" },
            { id: 2, name: "Yasser Sayed", photo: "/players/yassersayed.jpg" },
            { id: 3, name: "Mohamed Karem", photo: "/players/mohamedkarem.jpg" },
            { id: 4, name: "Soha Moustafa", photo: "/players/sohamoustafa.jpg" },
            { id: 5, name: "Omar Fahmy", photo: "/players/omarfahmy.jpg" },
            { id: 6, name: "Seif Elyamany", photo: "/players/seifelyamany.jpg" },
            { id: 7, name: "Yasser Fathi", photo: "/players/yasserfathi.jpg" },
            { id: 8, name: "Jana Elsaeed", photo: "/players/janaelsaeed.jpg" },
            { id: 9, name: "Salah Hassan", photo: "/players/salahhassan.jpg" },
        ]
    },
    {
        country: "South Africa",
        code: "ZA",
        players: [
            { id: 1, name: "Reg Bamford", photo: "/players/regbamford.jpg" }
        ]
    },
    {
        country: "England",
        code: "ENG",
        players: [
            { id: 1, name: "Stephen Mulliner", photo: "/players/stephenmulliner.jpg" },
            { id: 2, name: "Guy Scurfield", photo: "/players/guyscurfield.jpg" }
        ]
    },
    {
        country: "New Zealand",
        code: "NZ",
        players: [
            { id: 1, name: "Edmund J Fordyce", photo: "/players/edmundfordyce.jpg" }
        ]
    },
    {
        country: "Mexico",
        code: "MX",
        players: [
            { id: 1, name: "Brian Lozano", photo: "/players/brianlozano.jpg" }
        ]
    },
    {
        country: "Australia",
        code: "AU",
        players: [
            { id: 1, name: "Greg Fletcher", photo: "/players/gregfletcher.jpg" }
        ]
    },
    {
        country: "Spain",
        code: "ES",
        players: [
            { id: 1, name: "Juan Ojeda", photo: "/players/juanojeda.jpg" },
            { id: 2, name: "Begoña Elzaburu", photo: "/players/begonaelzaburu.jpg" }
        ]
    },
    {
        country: "Canada",
        code: "CA",
        players: [
            { id: 1, name: "Adam Barr", photo: "/players/adambarr.jpg" }
        ]
    }
];

export default function Players() {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    return (
        <div className="players-page">
            <div className="players-header">
                <h1>Players 🌍</h1>
                <p className="players-intro">Meet all competitors of the US Open 2026</p>
            </div>

            {playersData.map((group, i) => (
                <div key={i} className="country-section">
                    <div className="country-header">
                        {group.code === "ENG" ? (
                            <img
                                src="/England.png"
                                alt="England Flag"
                                style={{ width: "2em", height: "2em", marginRight: "0.5rem" }}
                            />
                        ) : (
                            <ReactCountryFlag
                                countryCode={group.code}
                                svg
                                style={{
                                    width: "2em",
                                    height: "2em",
                                    marginRight: "0.5rem"
                                }}
                            />
                        )}
                        <h2>{group.country}</h2>
                    </div>

                    <div className="players-container">
                        {group.players.map(player => (
                            <div key={player.id} className="player-card">
                                <div className="player-image-container">
                                    <img
                                        src={player.photo || "/placeholder.jpg"}
                                        alt={player.name}
                                        className="player-image"
                                        onClick={() => setSelectedPlayer(player.photo)}
                                    />
                                    <div className="player-overlay">
                                        <span className="player-name">{player.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="players-footer">
                <p>90 talented players competing in the US Open 2026</p>
            </div>
            {selectedPlayer && (
                <div className="player-modal" onClick={() => setSelectedPlayer(null)}>
                    <span className="close-btn" onClick={() => setSelectedPlayer(null)}>&times;</span>
                    <img src={selectedPlayer} alt="Player" />
                </div>
            )}
        </div>
    );
}
