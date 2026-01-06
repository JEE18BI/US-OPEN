import React, { useState, useEffect } from "react";

import "./Home.css";

import bg1 from "../components/NCC1.jpg";
import bg2 from "/Ncc2.png";
import bg3 from "/Ncc3.png";


const backgroundImages = [bg1,bg2,bg3];

const Home = () => {
    const [currentBg, setCurrentBg] = useState(0);
    const [loadedImages, setLoadedImages] = useState([bg1]);


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

                    {/* Logos */}


                    <h2>US OPEN GC & PROAM 2026</h2>

                    <p className="hero-subtitle">
                        National Croquet Center • West Palm Beach
                    </p>
                    <div className="hero-logos">
                        <img
                            src="/US_OPEN_GC_2026-Photoroom.png"
                            alt="US Open GC 2026 Logo"
                            className="hero-logo"
                        />
                        <img
                            src="/US_OPEN_GC_ProAm2026-Photoroom.png"
                            alt="US Open GC ProAm 2026 Logo"
                            className="hero-logo"
                        />
                    </div>

                </div>


            </div>

            {/* ABOUT SECTION */}


            <div className="content-section cards">
                <div className="info-card">
                    <h4>📍 Location</h4>
                    <p>National Croquet Center, West Palm Beach, Florida</p>
                </div>

                <div className="info-card">
                    <h4>📅 Dates</h4>
                    <p>February 9 – 14, 2026</p>
                </div>

                <div className="info-card">
                    <h4>🏆 Events</h4>
                    <p>US Open GC & ProAm Tournament</p>
                </div>
            </div>



        </div>
    );
};

export default Home;
