import React from "react";
import "./Home.css";

const Home = () => {

    return (


            <div className="app">
            {/* HERO SECTION */}
            <div className="hero-split-final">
                {/* LEFT poster */}

                <div className="hero-left-final">
                    <img
                        src="/cover.webp"
                        alt="US Open GC Poster"
                        className="hero-poster-final"
                    />
                </div>

                {/* RIGHT content */}
                <div className="hero-right-final">


                    <h2 className="hero-title-final">US OPEN GC & PROAM 2026</h2>

                    <p className="hero-subtitle-final">
                        National Croquet Center • West Palm Beach
                    </p>
                    <div className="hero-logos-final">
                        <img
                            src="/US_OPEN_GC_2026-Photoroom.png"
                            alt="US Open GC 2026 Logo"
                            className="hero-logo-final"
                            id="left-logo"
                        />
                        <img
                            src="/US_OPEN_GC_ProAm2026-Photoroom.png"
                            alt="US Open GC ProAm 2026 Logo"
                            className="hero-logo-final"
                            id="right-logo"
                        />
                    </div>


                    <div className="hero-links-final">
                        <a
                            href="https://croquetscores.com/2026/gc/us-open-proam"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-link-card"
                        >
                            <span className="hero-link-title">Croquet Scores</span>
                            <span className="hero-link-sub">ProAm</span>
                        </a>

                        <a
                            href="https://croquetscores.com/2026/gc/managers-tournament"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-link-card"
                        >
                            <span className="hero-link-title">Croquet Scores</span>
                            <span className="hero-link-sub">Manager’s Tournament</span>
                        </a>


                        <a
                            href="https://croquetscores.com/2026/gc/us-open"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-link-card"
                        >
                            <span className="hero-link-title">Croquet Scores</span>
                            <span className="hero-link-sub">US Open GC</span>
                        </a>
                        <a
                            href="https://www.youtube.com/@uscroquetassociation/streams"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-link-card"
                        >
                            <span className="hero-link-title">Youtube</span>
                            <span className="hero-link-sub">Live streaming</span>
                        </a>
                    </div>


                </div>
            </div>




            {/* PAST WINNERS SECTION */}
            <section className="winners-section">
                <h2 className="winners-title">Past Winners</h2>

                <div className="winners-grid">
                    <div
                        className="winner-card"
                        style={{ backgroundImage: "url(/championship.png)" }}
                    >
                        <div className="winner-overlay">
                            <span className="winner-category">CHAMPIONSHIP</span>
                            <h3 className="winner-name">Robert Fletcher</h3>
                        </div>
                    </div>

                    <div
                        className="winner-card"
                        style={{ backgroundImage: "url(/shield.png)" }}
                    >
                        <div className="winner-overlay">
                            <span className="winner-category">SHIELD</span>
                            <h3 className="winner-name">Tom Balding</h3>
                        </div>
                    </div>

                    <div
                        className="winner-card"
                        style={{ backgroundImage: "url(/bowl.png)" }}
                    >
                        <div className="winner-overlay">
                            <span className="winner-category">BOWL</span>
                            <h3 className="winner-name">Euan Burridge</h3>
                        </div>
                    </div>

                    <div
                        className="winner-card"
                        style={{ backgroundImage: "url(/plate.png)" }}
                    >
                        <div className="winner-overlay">
                            <span className="winner-category">PLATE</span>
                            <h3 className="winner-name">Rafael Hernandez-Alcala</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
            };

export default Home;
