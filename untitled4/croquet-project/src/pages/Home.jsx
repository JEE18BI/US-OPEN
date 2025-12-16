import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import bg1 from "../components/NCC1.png";
import bg2 from "../components/NCC1.png";
import bg3 from "../components/NCC1.png";
import bg4 from "../components/NCC1.png";
import bg5 from "../components/NCC1.png";

const backgroundImages = [bg1, bg2, bg3, bg4, bg5];

const experiences = [
    {
        icon: "🏆",
        title: "Top Competition",
        subtitle: "Here in Cairo!",
        description:
            "World-class players competing at the highest level in Egypt's premier croquet tournament.",
    },
    {
        icon: "🌍",
        title: "Meeting International Friends",
        subtitle: "We Missed You!",
        description:
            "Reconnect with croquet enthusiasts from around the world in a celebration of sportsmanship.",
    },
    {
        icon: "⚜️",
        title: "Unique Croquet Style",
        subtitle: "In The Land Of The Pharaohs",
        description:
            "Experience Egyptian-style croquet with its Lovely and Crazy Vibes.",
    },
];

const Home = () => {
    const [currentBg, setCurrentBg] = useState(0);
    const [loadedImages, setLoadedImages] = useState([bg1]);
    const [activeCard, setActiveCard] = useState(null);
    const navigate = useNavigate();

    // Background crossfade + lazy load
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentBg + 1) % backgroundImages.length;
            if (!loadedImages.includes(backgroundImages[nextIndex])) {
                const img = new Image();
                img.src = backgroundImages[nextIndex];
                img.onload = () => {
                    setLoadedImages((prev) => [...prev, backgroundImages[nextIndex]]);
                    setCurrentBg(nextIndex);
                };
            } else {
                setCurrentBg(nextIndex);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [currentBg, loadedImages]);

    return (
        <div className="app">
            {/* HERO SECTION */}
            <div className="hero-section">
                {backgroundImages.map((img, index) => (
                    <div
                        key={index}
                        className={`bg-slide ${index === currentBg ? "active" : ""}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                        }}
                    />
                ))}

                <div className="hero-content">
                    <h2>US OPEN GC 2026</h2>

                    <button
                        className="view-details-btn"
                        onClick={() => navigate("/tournament-details")}
                    >
                        US OPEN details
                    </button>
                    <button
                        className="view-details-btn"
                        onClick={() => navigate("/tournament-details")}
                    >
                        ProAm details
                    </button>

                </div>
            </div>

            {/* ABOUT SECTION */}


            <div className="content-section">

                <h3>About US Open </h3>
                <p>
                    The Palm Beaches will host the second international US Open GC to be held at the National Croquet Center (NCC), which is run by the Croquet Foundation of America (CFA) in West Palm Beach, FL, USA.  The tournament runs from February 9, 2026 to February 14, 2026. The US Open GC tournament and the US Open GC ProAm the day before are part of the same event.
                </p>
            </div>

            {/* EXPERIENCES SECTION */}
            <div className="content-section dark">
                <div className="section-header">
                    <h3>What You Will Experience</h3>
                    <p>Discover the unique aspects of the Egyptian Open Championship</p>
                </div>

                <div className="experiences-grid">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-card ${activeCard === index ? "flipped" : ""}`}
                            onClick={() =>
                                setActiveCard(activeCard === index ? null : index)
                            }
                        >
                            <div className="card-inner">
                                {/* Front */}
                                <div className="card-front">
                                    <div className="card-icon">{exp.icon}</div>
                                    <div className="card-content">
                                        <h4>{exp.title}</h4>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="card-back">
                                    <p className="subtitle">{exp.subtitle}</p>
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
