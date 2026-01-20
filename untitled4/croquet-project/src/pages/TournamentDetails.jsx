import React from "react";
import "./TournamentDetails.css";
import { Link } from "react-router-dom";


export default function TournamentDetails() {

    return (
        <section className="tournament-container">
            {/* ===================== NEW TOURNAMENT DETAILS (TOP) ===================== */}
            <section className="tournament-details-section">
                <h2 className="tournament-title">
                    2nd Annual US Open Golf Croquet – 2026
                </h2>

                <div className="doubles-cta">


                    <Link to="/players" className="doubles">
                        Check Players
                    </Link>

                </div>
                <h2 className="details-title">Tournament Details</h2>



                <div className="details-card">
                    <h3 className="details-subtitle"><b>Welcome Ceremony, Player Meeting & Practice</b></h3>
                    <div className="details-paragraph"> <ul>
                        <li>The welcome ceremony will be on <b>Sunday, February 8, 2026</b> in front of the National Croquet Center
                        clubhouse lawn side.</li>
                        <li>Players can practice starting at <b>12:00 PM</b> on designated lawns.</li>
                        <li>Players should assemble on the front right side of the veranda to organize for the opening ceremony.</li>
                        <li>A player meeting to distribute schedules and shirts will follow the ceremony.</li>
                    </ul> </div>
                </div>

                <div className="details-grid">
                    <div className="details-box">
                        <h3 className="details-subtitle">Lunch</h3>
                        <p className="details-paragraph">
                            A lunch buffet will be provided each day in the NCC clubhouse dining room.
                        </p>
                    </div>

                    <div className="details-box">
                        <h3 className="details-subtitle">Social</h3>
                        <p className="details-paragraph">
                            Monday, February 9 there will be a reception and dinner for the ProAm donors,
                            their doubles partners and guests.
                        </p>
                    </div>

                    <div className="details-box">
                        <h3 className="details-subtitle">Balls & Hoops</h3>
                        <p className="details-paragraph">
                            Balls will be <b>Invictus primary and secondary colors</b>. Hoops will be <b>Quadways or Superhoops</b>.
                        </p>
                    </div>
                </div>

                <div className="schedule-card">
                    <h2 className="details-title">Main Event Schedule</h2>

                    <div className="schedule-day">
                        <h3>Sunday, February 8, 2026 (Practice Day)</h3>
                        <ul>
                            <li><b>12:00 PM – 2:45 PM:</b> Practice on designated lawns</li>
                            <li><b>3:00 PM:</b> Opening Ceremony</li>
                            <li><b>4:00 PM:</b> Player’s Meeting</li>
                            <li><b>5:00 PM:</b> National Croquet Center closes for a private event</li>
                        </ul>
                    </div>

                    <div className="schedule-day">
                        <h3>Monday, February 9, 2026</h3>
                        <ul>
                            <li><b>8:30 AM:</b> ProAm doubles tournament begins</li>
                            <li>
                                <b>8:30 AM:</b> Optional Manager’s singles Swiss tournament and/or practice begins
                                at the Beach Club in Palm Beach
                            </li>
                            <li><b>5:00 PM:</b> ProAm players and guests cocktail reception in NCC clubhouse bar</li>
                            <li><b>6:15 PM:</b> ProAm awards in dining room</li>
                            <li><b>6:30 PM:</b> ProAm players and guests assigned seats for dinner</li>
                        </ul>
                    </div>

                    <div className="schedule-day">
                        <h3>Tuesday, February 10, 2026</h3>
                        <ul>
                            <li>
                                <b>8:00 AM:</b> Block play begins (2/10–2/11) possible play under lights lawns 2 and 3 if needed
                            </li>
                            <li>
                                <b>11:30 AM:</b> Player buffet daily provided (2/10–2/14)
                            </li>
                        </ul>
                    </div>

                    <div className="schedule-day">
                        <h3>Thursday, February 12, 2026</h3>
                        <ul>
                            <li>
                                <b>8:00 AM:</b> Knock-Out Rounds and Plate begins with possible play under the lights on lawns 2 and 3 if needed
                            </li>
                        </ul>
                    </div>

                    <div className="schedule-day">
                        <h3>Friday, February 13, 2026</h3>
                        <ul>
                            <li><b>8:00 AM:</b> Semi-finals, Bowl, Shield, Plate</li>
                        </ul>
                    </div>

                    <div className="schedule-day">
                        <h3>Saturday, February 14, 2026</h3>
                        <ul>
                            <li><b>8:00 AM:</b> Championship Finals, Bowl Final, Plate Final</li>
                            <li><b>Awards and closing ceremony</b></li>
                        </ul>
                    </div>
                </div>
            </section>
            <h2 className="add">Additional Details</h2>

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
                        <li>four past World Champions in the field</li>
                        <li>9 of the top 20 ranked GC players worldwide</li>
                        <li>5 of the current top 10 players in the world competing</li>
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
