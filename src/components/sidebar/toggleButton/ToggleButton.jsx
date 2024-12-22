import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen(prev => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                {/* Top Line */}
                <motion.path
                    d="M 2 2.5 L 20 2.5"
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" } // Rotates to bottom-right
                    }}
                />
                {/* Middle Line */}
                <motion.path
                    d="M 2 9.423 L 20 9.423"
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 } // Hides when open
                    }}
                />
                {/* Bottom Line */}
                <motion.path
                    d="M 2 16.5 L 20 16.5"
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.5 L 20 16.5" }, // Correct horizontal position
                        open: { d: "M 3 2.5 L 17 16.5" } // Rotates to top-right
                    }}
                />
            </svg>
        </button>
    );
};

export default ToggleButton;
