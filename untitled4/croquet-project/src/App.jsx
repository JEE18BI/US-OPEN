import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Players from "./pages/Players.jsx";
import Help from "./pages/Help.jsx";
import Announcements from "./pages/Announcements.jsx";
import Clubs from "./pages/Clubs.jsx";
import LiveMatches from "./pages/LiveMatches.jsx";
import TournamentDetails from "./pages/TournamentDetails.jsx";
import ProAm from "./pages/ProAm";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Blocks from "./pages/Blocks.jsx";
import "./App.css";

function App() {
    const location = useLocation();
    const COMING_SOON = import.meta.env.VITE_COMING_SOON === "true";


    useEffect(() => {
        document.title = "US Open 2026";
    }, []);
    if (COMING_SOON) {
        return <ComingSoon />;
    }

    return (
        <div className="app-layout">

            <Navbar />

            <main className="app-content">
                <AnimatePresence mode="wait">
                    <ScrollToTop />
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                        <Route path="/usopen" element={<PageWrapper><Home /></PageWrapper>} />

                        <Route path="/clubs" element={<PageWrapper><Clubs /></PageWrapper>} />
                        <Route path="/blocks" element={<PageWrapper><Blocks /></PageWrapper>} />
                        <Route path="/matches" element={<PageWrapper><LiveMatches /></PageWrapper>} />

                        <Route path="/announcements" element={<PageWrapper><Announcements /></PageWrapper>} />
                        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
                        <Route path="/players" element={<PageWrapper><Players /></PageWrapper>} />
                        <Route path="/help" element={<PageWrapper><Help /></PageWrapper>} />
                        <Route path="/tournament-details" element={<PageWrapper><TournamentDetails /></PageWrapper>} />
                        <Route path="/proam" element={<PageWrapper><ProAm /></PageWrapper>} />
                    </Routes>

                </AnimatePresence>
            </main>

            <Footer />


        </div>
    );
}

// ✅ A wrapper component that adds animation
function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

export default App;
