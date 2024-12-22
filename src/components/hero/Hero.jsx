import React from 'react';
import './Hero.scss';
import heroimage from './../../assets/port5-removebg-preview.png';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 1,
            y: [0, 10, 0], // Bounce effect
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="text" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>ABDULBASIT ABDULWAHAB</motion.h2>
                    <motion.h1 variants={textVariants}>FULL STACK WEB & MOBILE DEVELOPER</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See My Latest Project</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Wrapper for the icon to include initial animation */}
            <motion.div
                className="iconContainer"
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }}   // Fade in and move up
                transition={{
                    duration: 1,
                    delay: 1, // Delay to sync with text
                }}
            >
                {/* Bounce animation */}
                <motion.div variants={textVariants} animate="scrollButton">
                    <FiArrowDownCircle size={40} />
                </motion.div>
            </motion.div>

            <div className="imageContainer">
                <img src={heroimage} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
