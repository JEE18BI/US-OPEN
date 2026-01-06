import React from "react";
import './ProAm.css';

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

    return (
        <section className="proam-container">
            <h2 className="proam-title"> ProAm Doubles Fundraiser – 2026</h2>
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

            <div id="hotel-info" className="hotel-info">
                <h3>Doubles List</h3>
                <div className="proam-table-wrapper">
                    <table className="proam-table">
                        <thead>
                        <tr>
                            <th>Am</th>
                            <th>Pro</th>
                            <th>Combined D-Grade</th>
                        </tr>
                        </thead>
                        <tbody>
                        {proAmPairs.map((pair, index) => (
                            <tr key={index}>
                                <td data-label="Am">{pair.am}</td>
                                <td data-label="Pro">{pair.pro}</td>
                                <td data-label="Combined D-Grade">{pair.grade}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </section>
    );
}
