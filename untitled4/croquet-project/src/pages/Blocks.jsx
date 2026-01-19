// import { useState } from 'react';
import './Blocks.css';

export default function Blocks() {


    // const [activeBlock, setActiveBlock] = useState(null);
    // const [searchQuery, setSearchQuery] = useState("");
    // const [suggestions, setSuggestions] = useState([]);
    // const [highlightedPlayers, setHighlightedPlayers] = useState([]);

    // const blocks = [
    //     {
    //         id: 1,
    //         name: "Block A",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "Block B",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 3,
    //         name: "Block C",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 4,
    //         name: "Block D",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 5,
    //         name: "Block E",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 6,
    //         name: "Block F",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 7,
    //         name: "Block G",
    //         players: [
    //
    //         ]
    //     },
    //     {
    //         id: 8,
    //         name: "Block H",
    //         players: [
    //
    //         ]
    //     }
    // ];



    // const handleClick = (id) => {
    //     setActiveBlock(id);
    //     setHighlightedPlayers([]);
    // };

    // const closeModal = () => {
    //     setActiveBlock(null);
    //     setHighlightedPlayers([]);
    //     setSearchQuery("");
    // };

    // Autocomplete suggestions
    // const handleInputChange = (e) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);
    //
    //     if (!value.trim()) {
    //         setSuggestions([]);
    //         return;
    //     }
    //
    //     const query = value.toLowerCase();
    //     let allPlayers = blocks.flatMap(b => b.players.map(p => ({ player: p, block: b.id })));
    //     let filtered = allPlayers.filter(obj => obj.player.toLowerCase().includes(query));
    //     setSuggestions(filtered.slice(0, 6)); // limit to 6
    // };

    // // Select from suggestions → open block + highlight
    // const selectPlayer = (player, blockId) => {
    //     setSearchQuery(player);
    //     setSuggestions([]);
    //     setActiveBlock(blockId);
    //     setHighlightedPlayers([player]);
    // };

    // Manual search fallback
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const query = searchQuery.trim().toLowerCase();
    //     if (!query) return;
    //
    //     for (let block of blocks) {
    //         const match = block.players.find(p => p.toLowerCase().includes(query));
    //         if (match) {
    //             setActiveBlock(block.id);
    //             setHighlightedPlayers([match]);
    //             return;
    //         }
    //     }
    //     alert("❌ Player not found");
    // };

    return (
        <div>
            <p className="soon">
                Will be announced soon
            </p>
        </div>
        // <div className="blocks-page">
        //     <div className="blocks-header">
        //         <h1>Championship Blocks 🏆</h1>
        //         <p>Type your name to find your block</p>
        //         <p>Scroll down through the block to see the whole block</p>
        //     </div>
        //
        //     {/* --- Search Section --- */}
        //     <form onSubmit={handleSearch} className="search-box">
        //         <input
        //             type="text"
        //             placeholder="Enter your name..."
        //             value={searchQuery}
        //             onChange={handleInputChange}
        //         />
        //         <button type="submit">Find</button>
        //     </form>
        //
        //     {/* Autocomplete dropdown */}
        //     {suggestions.length > 0 && (
        //         <ul className="suggestions-list">
        //             {suggestions.map((s, i) => (
        //                 <li key={i} onClick={() => selectPlayer(s.player, s.block)}>
        //                     {s.player} <span className="block-label">({blocks.find(b => b.id === s.block).name})</span>
        //                 </li>
        //             ))}
        //         </ul>
        //     )}
        //
        //     {/* Show all blocks only if no player selected */}
        //     {!activeBlock && (
        //         <div className="blocks-grid">
        //             {blocks.map(block => (
        //                 <div
        //                     key={block.id}
        //                     className="block-card"
        //                     onClick={() => handleClick(block.id)}
        //                 >
        //                     <h3>{block.name}</h3>
        //                     <ul className="block-list">
        //                         {block.players.map((player, i) => (
        //                             <li key={i}>{player}</li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             ))}
        //         </div>
        //     )}
        //
        //     {/* Modal shows ONLY the selected block */}
        //     {activeBlock && (
        //         <div className="modal-overlay" onClick={closeModal}>
        //             <div
        //                 className="modal-card"
        //                 onClick={(e) => e.stopPropagation()}
        //             >
        //                 <h3>{blocks.find(b => b.id === activeBlock).name}</h3>
        //                 <ul className="block-list">
        //                     {blocks.find(b => b.id === activeBlock).players.map((player, i) => (
        //                         <li
        //                             key={i}
        //                             className={highlightedPlayers.includes(player) ? "highlight" : ""}
        //                         >
        //                             {player}
        //                         </li>
        //                     ))}
        //                 </ul>
        //                 <button className="close-btn" onClick={closeModal}>✕</button>
        //             </div>
        //         </div>
        //    )}
        // </div>
    );
}
