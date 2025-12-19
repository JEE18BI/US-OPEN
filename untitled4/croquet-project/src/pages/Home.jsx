import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import bg1 from "../components/NCC1.jpg";


const backgroundImages = [bg1];

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
                    <h2>US OPEN GC 2026</h2>

                    {/*<button*/}
                    {/*    className="view-details-btn"*/}
                    {/*    onClick={() => navigate("/tournament-details")}*/}
                    {/*>*/}
                    {/*    US OPEN details*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="view-details-btn"*/}
                    {/*    onClick={() => navigate("/ProAm")}*/}
                    {/*>*/}
                    {/*    ProAm details*/}
                    {/*</button>*/}

                </div>
            </div>

            {/* ABOUT SECTION */}


            <div className="content-section">

                <h3>About US Open </h3>
                <p>
                    The Palm Beaches will host the second international US Open GC to be held at the National Croquet Center (NCC), which is run by the Croquet Foundation of America (CFA) in West Palm Beach, FL, USA.  The tournament runs from February 9, 2026 to February 14, 2026. The US Open GC tournament and the US Open GC ProAm the day before are part of the same event.
                </p>
            </div>


        </div>
    );
};

export default Home;
