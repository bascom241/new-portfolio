import React from 'react'
import './navbar.scss'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion'
import SideBar from '../sidebar/SideBar';

const Navbar = () => {
    return (
        <div className='navbar'>
          <SideBar/>
            <div className='wrapper'>
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Abdulbasit </motion.span>
                <div className='social'>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><FaTwitter/></a>
                    <a href='#'><FaInstagram/></a>
                    <a href='#'><FaLinkedin/></a>
                    <a href='#'><FaGithub/></a>
                    <a href='#'><FaYoutube/></a>
                  
                </div>
            </div>
        </div>
    )
}

export default Navbar
