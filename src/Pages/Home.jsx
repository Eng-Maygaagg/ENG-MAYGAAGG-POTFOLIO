import React, { useState } from "react";
import { Link } from "react-router-dom";

import "animate.css";

import MyPicture from "../assets/MyPicture.jpeg"
import LinkedIn from "../assets/linkedin.png"
import Facebook from "../assets/facebook.png"
import GitHub from "../assets/github.png"
import WhatsApp from "../assets/whatsapp.png"

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/JavaScrip.png"
import ReactJs from "../assets/React.png"
import TailwindCSS from "../assets/tailwindCSS.png"
import NodeJs from "../assets/node-js.png"
import ExpressJs from "../assets/express-js.png"
import MongoDB from "../assets/mongodb.png"
import PHP from "../assets/php.png"

import project1 from "../assets/my_demo_site.png"
import project2 from "../assets/app_project.jpg"
import project3 from "../assets/portfolio_site.jpg"
import project4 from "../assets/Dashboard.jpg"

function HomePage() {

    return ( 
        <>

        <section className="flex flex-col-reverse md:flex-row justify-around items-center w-full mt-16 sm:mt-7 min-h-dvh p-4 sm:p-6 md:p-10 gap-6 md:gap-0">
            <div className="inforSide flex-1 md:flex-2 w-full max-w-xl md:max-w-none order-2 md:order-1">
                <h3 className="font-light animate__animated animate__fadeInUp animate__delay-0.2s">Wellcome to here,</h3>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl my-1.5 animate__animated animate__fadeInUp animate__delay-0.4s"><span className="span">I'm</span> Cabdirahman Ibrahim Cali (<span> Eng Maygaagg </span>)</h1>
                <h2 className="font-medium text-lg sm:text-[20px] md:text-[22px] animate__animated animate__fadeInUp animate__delay-0.6s">Softwere Developer</h2>
                <p className="font-light text-sm sm:text-base mt-1 animate__animated animate__fadeInUp animate__delay-0.8s">A software developer who builds responsive web applications using JavaScript and React. 
                Focuses on clean, maintainable code and effective collaboration with designers and engineers. 
                Enjoys solving complex problems and learning new technologies.
                </p>
                <div className="btns flex flex-wrap gap-3 sm:gap-6 mt-4 sm:mt-5">
                    <button className="px-4 py-2 rounded cursor-pointer transition-all animate__animated animate__fadeInUp animate__delay-0.9s text-sm sm:text-base">Hire Me</button>
                    <button className="px-4 py-2 rounded cursor-pointer transition-all animate__animated animate__fadeInUp animate__delay-0.99s text-sm sm:text-base"><Link to='/projects'>See Projects</Link></button>
                </div>
            </div>
            <div className="iamgeSide flex-1 animate__animated animate__fadeInUp animate__delay-1s order-1 md:order-2 flex justify-center md:justify-end">
                <div className="grediant_bg rounded mx-auto md:mx-0">
                    <img className="ml-4 mr-4 md:ml-6 md:mr-5 z-10 rounded w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] h-auto" src={MyPicture} alt="Me" />
                </div>
            </div>
            <div className="social_media hidden md:flex md:mr-4 flex-col justify-center items-center gap-2.5 order-3">
                <span className="h-8"></span>
                <Link target="_blank" to="https://www.linkedin.com/feed/"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={LinkedIn} alt="LinkedIn" /></Link>
                <Link target="_blank" to="https://github.com/Eng-Maygaagg"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={GitHub} alt="GitHub"/></Link>
                <Link target="_blank" to="https://www.facebook.com/home.php"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={Facebook} alt="Facebook" /></Link>
                <Link target="_blank" to="https://wa.me/252634795728"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={WhatsApp} alt="WhatsApp" /></Link>
                <span className="h-8"></span>
            </div>
        </section>

        {/* Skils Review Section */}
    <section className="Skills_Review flex flex-col p-4 sm:p-6 md:p-8 transition-all">
        <h2 className="font-medium text-base sm:text-[18px] tracking-wider transition-all">Preview Skills</h2>
        <div className="skills_container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 transition-all p-4 sm:p-6 md:p-8 mt-4 sm:mt-7 rounded">
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={HTML} alt="HTML" />
                <p className="font-light mt-0.5">HTML</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={CSS} alt="CSS" />
                <p className="font-light mt-0.5">CSS</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={JS} alt="JavaSript" />
                <p className="font-light mt-0.5">JavaSript</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={TailwindCSS} alt="TailwindCSS" />
                <p className="font-light mt-0.5">TailwindCSS</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={ReactJs} alt="react js" />
                <p className="font-light mt-0.5">React Js</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={NodeJs} alt="Node js" />
                <p className="font-light mt-0.5">Node Js</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={ExpressJs} alt="Express js" />
                <p className="font-light mt-0.5">Express Js</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={MongoDB} alt="MongoDB" />
                <p className="font-light mt-0.5">MongoDB</p>
            </div>
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={PHP} alt="php" />
                <p className="font-light mt-0.5">PHP</p>
            </div>
            {/* <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <img className="w-8 h-auto" src={SQL} alt="sql" />
                <p className="font-light">SQL Server</p>
            </div> */}
            <div className="card flex flex-col justify-center items-center transition-all p-6 gap-2 rounded">
                <Link to='/skills'><p className="semore_skills">See more...</p></Link>
            </div>
        </div>
    </section>

    {/* Preview Projects */}
    <section className="preview_projects flex flex-col transition-all px-4 sm:px-6">
        <h2 className="font-medium text-base sm:text-[18px] tracking-wider transition-all">Preview Projects</h2>
        <div className="projecs_container grid grid-cols-1 sm:grid-cols-2 mt-4 gap-3 sm:gap-4 rounded w-full max-w-4xl mx-auto">
            <img src={project1} alt="Project 1" className="w-full h-auto rounded" />
            <img src={project2} alt="Project 2" className="w-full h-auto rounded" />
            <img src={project3} alt="Project 3" className="w-full h-auto rounded" />
            <img src={project4} alt="Project 4" className="w-full h-auto rounded" />
        </div>
        <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 rounded shadow text-sm sm:text-base"><Link to='/projects'>See More Projects</Link></button>
    </section>
        </>
     );
}

export default HomePage;