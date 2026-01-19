import React from "react";
import "./ProAm.css";

export default function ProAm() {
    const proAmPairs = [
        { am: "Alex Galasso", pro: "Adam Barr", grade: 4009 },
        { am: "Alise Scanlon", pro: "Omar Fahmy", grade: 3929 },
        { am: "Bill Hinkebein", pro: "Brian Lozano", grade: 3842 },
        { am: "Bill Kuhn", pro: "Stephen Mulliner", grade: 3995 },
        { am: "Bill Simmons", pro: "Ahmed Elmahdy", grade: 4424 },
        { am: "Bruce Hindin", pro: "Kent Lovvorn", grade: 4028 },
        { am: "Caryl Firth", pro: "Seif Elyamany", grade: 3991 },
        { am: "David Kepner", pro: "Reg Bamford", grade: 4227 },
        { am: "David McCoy", pro: "Ahab Abdelwahab", grade: 4029 },
        { am: "Diane Wren", pro: "Mohamed Karem", grade: 3758 },
        { am: "Gay Cinque", pro: "Danny Huneycutt", grade: 3792 },
        { am: "Jay Carey", pro: "Zack Watson", grade: 3992 },
        { am: "John Curington", pro: "Juan Ojeda", grade: 4037 },
        { am: "John Dillon", pro: "Greg Fletcher", grade: 3989 },
        { am: "John O Brown", pro: "Thomas Balding", grade: 4470 },
        { am: "Karen Heckman", pro: "Edmund J Fordyce", grade: 3999 },
        { am: "Kit Pannill", pro: "Soha Moustafa", grade: 3560 },
        { am: "Madeleine d'Ambrosio", pro: "Kyle Maloof", grade: 3930 },
        { am: "Mark Ski", pro: "Matthew Essick", grade: 4405 },
        { am: "Mary Galasso", pro: "Tamer Hatata", grade: 4004 },
        { am: "Priscilla Flowers", pro: "Darin Guffey", grade: 4002 },
        { am: "Simon Dentchev", pro: "Macey White", grade: 4014 },
        { am: "Trevor Head", pro: "Jana Elsaeed", grade: 3707 },
        { am: "Trula Myers", pro: "Stephen Morgan", grade: 3764 },
    ];

    // ✅ helper to map names → photos (add yours here)
    const getPhoto = (name) => {
        const map = {
            // ===== PROAM PAIRS (AM + PRO) =====
            "Alex Galasso": "/sponsors/alexgalasso.jpg",
            "Adam Barr": "/players/adambarr.jpg",

            "Alise Scanlon": "/sponsors/alisescanlon.jpg",
            "Omar Fahmy": "/players/omarfahmy.jpg",

            "Bill Hinkebein": "/sponsors/bill.png",
            "Brian Lozano": "/players/brianlozano.jpg",

            "Bill Kuhn": "/sponsors/billkuhn.jpg",
            "Stephen Mulliner": "/players/stephenmulliner.jpg",

            "Bill Simmons": "/sponsors/billsimmons.jpg",
            "Ahmed Elmahdy": "/players/ahmedelmahdy.jpg",

            "Bruce Hindin": "/sponsors/brucehindin.jpg",
            "Kent Lovvorn": "/players/kentlovvorn.jpg",

            "Caryl Firth": "/sponsors/carylfirth.jpg",
            "Seif Elyamany": "/players/seifelyamany.jpg",

            "David Kepner": "/sponsors/davidkepner.jpg",
            "Reg Bamford": "/players/regbamford.jpg",

            "David McCoy": "/sponsors/davidmccoy.jpg",
            "Ahab Abdelwahab": "/players/ahababdelwahab.jpg",

            "Diane Wren": "/sponsors/dianewren.jpg",
            "Mohamed Karem": "/players/mohamedkarem.jpg",

            "Gay Cinque": "/sponsors/gaycinque.jpg",
            "Danny Huneycutt": "/players/dannyhuneycutt.jpg",

            "Jay Carey": "/sponsors/jaycarey.jpg",
            "Zack Watson": "/players/zackwatson.jpg",

            "John Curington": "/sponsors/johncurington.jpg",
            "Juan Ojeda": "/players/juanojeda.jpg",

            "John Dillon": "/sponsors/johndillon.jpg",
            "Greg Fletcher": "/players/gregfletcher.jpg",

            "John O Brown": "/sponsors/johnobrown.jpg",
            "Thomas Balding": "/players/thomasbalding.jpg",

            "Karen Heckman": "/sponsors/karenheckman.jpg",
            "Edmund J Fordyce": "/players/edmundfordyce.jpg",

            "Kit Pannill": "/sponsors/kitpannill.jpg",
            "Soha Moustafa": "/players/sohamoustafa.jpg",

            "Madeleine d'Ambrosio": "/sponsors/madeleine.jpg",
            "Kyle Maloof": "/players/kylemaloof.jpg",

            "Mark Ski": "/sponsors/markski.jpg",
            "Matthew Essick": "/players/matthewessick.jpg",

            "Mary Galasso": "/sponsors/marygalasso.jpg",
            "Tamer Hatata": "/players/tamerhatata.jpg",

            "Priscilla Flowers": "/sponsors/priscillaflowers.jpg",
            "Darin Guffey": "/players/daringuffey.jpg",

            "Simon Dentchev": "/sponsors/simondentchev.jpg",
            "Macey White": "/players/maceywhite.jpg",

            "Trevor Head": "/sponsors/trevorhead.jpg",
            "Jana Elsaeed": "/players/janaelsaeed.jpg",

            "Trula Myers": "/sponsors/trulamyers.jpg",
            "Stephen Morgan": "/players/stephenmorgan.jpg",
        };

        return map[name] || "/placeholder.jpg";
    };


    return (
        <section className="proam-container">
            <h2 className="proam-title">ProAm Doubles Fundraiser – 2026</h2>

            <div className="doubles-cta">
                <h3
                    className="doubles"
                    onClick={() => {
                        document
                            .getElementById("hotel-info")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    Check Doubles
                </h3>
            </div>

            <div className="proam-card">
                <ul>
                    <li>Date: Monday, February 9, 2026</li>
                    <li>Top 24 D-Grades as of October 15 participate</li>
                    <li>Each paired with 24 donors</li>
                    <li>4–5 Swiss-format doubles games per team</li>
                    <li>Beverages, lunch, reception & banquet included</li>
                    <li>Top two teams recognized at banquet dinner</li>
                    <li>8 admitted players not in ProAm may attend banquet for $75 social fee</li>
                </ul>
            </div>

            {/* ✅ Doubles Section */}
            <div id="hotel-info" className="hotel-info">
                <h3>Doubles List</h3>

                <div className="proam-pairs-grid">
                    {proAmPairs.map((pair, index) => (
                        <div key={index} className="proam-pair-card">
                            <div className="proam-pair-top">
                                {/* AM */}
                                <div className="proam-person">
                                    <div className="proam-avatar">
                                        <img src={getPhoto(pair.am)} alt={pair.am} />
                                    </div>
                                    <p className="proam-role">AM</p>
                                    <p className="proam-name">{pair.am}</p>
                                </div>

                                {/* VS ICON */}
                                <div className="proam-divider">
                                    <span>×</span>
                                </div>

                                {/* PRO */}
                                <div className="proam-person">
                                    <div className="proam-avatar">
                                        <img src={getPhoto(pair.pro)} alt={pair.pro} />
                                    </div>
                                    <p className="proam-role">PRO</p>
                                    <p className="proam-name">{pair.pro}</p>
                                </div>
                            </div>

                            <div className="proam-grade-badge">
                                Combined D-Grade: <strong>{pair.grade}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
