import React from "react";
import "./Sponsors.css";

export default function Sponsors() {
    const sponsorsData = [
        // ===== PLATINUM =====
        { name: "Alice (Kit) Pannill", type: "Platinum", photo: "/sponsors/kitpannill.jpg" },
        { name: "Billy (Bill) J Simmons", type: "Platinum", photo: "/sponsors/billsimmons.jpg",note:"2021 GC USCA GC Club Teams Championship finalist" },
        { name: "Kim Beaty", type: "Platinum", photo: "/sponsors/kimbeaty.jpg" },
        { name: "Dave Goddard", type: "Platinum", photo: "/sponsors/davegoddard.jpg" },
        { name: "David Kepner", type: "Platinum", photo: "/sponsors/davidkepner.jpg" },
        { name: "Gay Cinque", type: "Platinum", photo: "/sponsors/gaycinque.jpg" },
        { name: "John O Brown", type: "Platinum", photo: "/sponsors/johnobrown.jpg" },
        { name: "Trula Myers", type: "Platinum", photo: "/sponsors/trulamyers.jpg" },
        { name: "William (Bill) Hinkebein", type: "Platinum", photo: "/sponsors/bill.png" },

        // ===== GOLD =====
        { name: "Alex T Galasso", type: "Gold", photo: "/sponsors/alexgalasso.jpg",note:"2025 GC Seniors Champion" },
        { name: "Alice (Alise) Scanlon", type: "Gold", photo: "/sponsors/alisescanlon.jpg" },
        { name: "Bruce Hindin", type: "Gold", photo: "/sponsors/brucehindin.jpg" },
        { name: "Caryl Firth", type: "Gold", photo: "/sponsors/carylfirth.jpg" },
        { name: "Diane Wren", type: "Gold", photo: "/sponsors/dianewren.jpg" },
        { name: "Jay Carey", type: "Gold", photo: "/sponsors/jaycarey.jpg" },
        { name: "John Dillon", type: "Gold", photo: "/sponsors/johndillon.jpg" },
        { name: "John W Curington", type: "Gold", photo: "/sponsors/johncurington.jpg" },
        { name: "Karen Heckman", type: "Gold", photo: "/sponsors/karenheckman.jpg" },
        { name: "Madeleine d'Ambrosio", type: "Gold", photo: "/sponsors/madeleine.jpg" },
        { name: "Mary M Galasso", type: "Gold", photo: "/sponsors/marygalasso.jpg" },
        { name: "Priscilla M Flowers", type: "Gold", photo: "/sponsors/priscillaflowers.jpg" },
        { name: "Trevor Head", type: "Gold", photo: "/sponsors/trevorhead.jpg" },
        { name: "W. David McCoy", type: "Gold", photo: "/sponsors/davidmccoy.jpg" },
        { name: "William (Bill) Kuhn", type: "Gold", photo: "/sponsors/billkuhn.jpg" },
        {name: "Richard (Dick) Boger",type :"Gold", photo:"/sponsors/richardboger.jpg"},

        // ===== SILVER (NO photos) =====
        { name: "Deidre Myers", type: "Silver" },
        { name: "Georgia R Carter", type: "Silver" },
        { name: "Kent Lovvorn (for Cantey Callaway)", type: "Silver" },
        { name: "Mary Cole", type: "Silver" },
        { name: "Mary Cole (for April Wilson)", type: "Silver" },
        { name: "Nancy Sansalone", type: "Silver" },

        // ===== SPONSORS (NO photos) =====
        { name: "Oakley Woods Croquet", type: "Sponsor" },
        { name: "White Tie Croquet", type: "Sponsor" },

        // ===== SUPPORTERS (NO photos) =====
        { name: "Palm Beach Sports Commission", type: "Supporter" },
    ];

    const typesOrder = ["Platinum", "Gold", "Silver", "Sponsor", "Supporter"];

    const groupedSponsors = typesOrder.map((type) => ({
        type,
        sponsors: sponsorsData.filter((s) => s.type === type),
    }));

    // ✅ Only show photo for these categories
    const photoTypes = ["Platinum", "Gold"];

    return (
        <div className="sponsors-page">
            <div className="sponsors-header">
                <h1 className="sponsors-title">Sponsors & Donors</h1>
                <p className="sponsors-subtitle">
                    Thank you for supporting the 2026 US Open GC & ProAm 🇺🇸
                </p>
            </div>

            {groupedSponsors.map((section) =>
                section.sponsors.length > 0 ? (
                    <div key={section.type} className="sponsors-section">
                        <div className="section-title-wrap">
                            <h2 className="section-title">{section.type}</h2>
                            <span className="section-count">{section.sponsors.length}</span>
                        </div>

                        <div className="sponsors-grid">
                            {section.sponsors.map((sponsor, i) => {
                                const showPhoto = photoTypes.includes(sponsor.type);

                                return (
                                    <div
                                        key={i}
                                        className={`sponsor-card ${!showPhoto ? "no-photo" : ""}`}
                                    >
                                        {showPhoto && (
                                            <div className="sponsor-photo-wrap">
                                                <img
                                                    src={sponsor.photo || "/placeholder.jpg"}
                                                    alt={sponsor.name}
                                                    className="sponsor-photo"
                                                />
                                            </div>
                                        )}

                                        <div className="sponsor-info">
                                            <h3 className="sponsor-name">{sponsor.name}</h3>

                                            {sponsor.note && (
                                                <p className="sponsor-note">{sponsor.note}</p>
                                            )}

                                            <span className={`sponsor-badge ${sponsor.type}`}>
                        {sponsor.type}
                      </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : null
            )}
        </div>
    );
}
