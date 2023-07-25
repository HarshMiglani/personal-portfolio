import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './style.scss'

const About = () => {

    return(
        <div className="about">
            <Navbar/>
            <div className="container">
            <h1 className="page-title-about">About Me</h1>
            <h2 className="about-me-description">As a backbencher turned into coding enthusiast, I have a passion for exploring both the natural world and the digital realm. My journey into coding began as a curiosity, but quickly turned into a full-blown pursuit as I discovered the power and potential of Web Development. Now, I am honing my skills and building some great projects that showcases my creativity, technical abilities, and problem-solving mindset. When I'm not coding, you can find me indulging in one of my favorite hobbies: travelling. I love immersing myself in different cultures, cuisines, and landscapes, and using these experiences to inspire and inform my work. Whether I'm hiking through the mountains or exploring a bustling city, I always keep an open mind and a sense of wonder.</h2>
            </div>
            <Footer/>
        </div>
    )

}

export default About;