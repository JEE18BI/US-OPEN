import React from "react";
import "./TournamentDetails.css";

export default function TournamentDetails() {
    return (
        <section className="tournament-container">
            <h2 className="tournament-title">
                 2nd Annual US Open Golf Croquet – 2026
            </h2>

            <div className="tournament-grid">
                {/* OVERVIEW */}
                <div className="tournament-card">
                    <h3>📍 Event Overview</h3>
                    <ul>
                        <li>One of the most competitive world-class Golf Croquet events</li>
                        <li>Held in 2026 at the National Croquet Center (NCC)</li>
                        <li>USCA-titled championship event</li>
                        <li>Featuring elite international competition</li>
                    </ul>
                </div>

                {/* FIELD */}
                <div className="tournament-card">
                    <h3>🌍 Player Announcement</h3>
                    <ul>
                        <li>Players represent 9 different countries</li>
                        <li>#1 ranked players from 5 nations</li>
                        <li>Two past World Champions in the field</li>
                        <li>10 of the top 20 ranked GC players worldwide</li>
                        <li>4 of the current top 5 players in the world competing</li>
                    </ul>
                </div>

                {/* ENTRY & CANCELLATION */}
                <div className="tournament-card">
                    <h3>💳 Entry & Cancellation Policy</h3>
                    <ul>
                        <li>Entry fee: $250</li>
                        <li>Payment due within 7 days of registration email</li>
                        <li>Failure to pay may result in loss of tournament spot</li>
                        <li>
                            Cancellation &gt; 8 weeks: $25 fee ($75 if shirt ordered)
                        </li>
                        <li>Cancellation 4–8 weeks: $125 fee</li>
                        <li>Cancellation &lt; 4 weeks: No refund</li>
                    </ul>
                </div>

                {/* TOURNAMENT PACKAGE */}
                <div className="tournament-card">
                    <h3>🎁 Tournament Package & Prizes</h3>
                    <ul>
                        <li>Personalized long-sleeve tournament shirt</li>
                        <li>5 days of high-level GC play (4–6 games/day)</li>
                        <li>Perpetual Trophy awarded to the Champion</li>
                        <li>Individual awards for playoff group finalists</li>
                        <li>Prize purse for semi-finalists, finalists & winners</li>
                        <li>First Place: $3,000</li>
                        <li>Top 5 players earn $1,000 or more</li>
                    </ul>
                </div>





                {/* OFFICIALS */}


                {/* REGISTRATION */}

            </div>
        </section>
    );
}
