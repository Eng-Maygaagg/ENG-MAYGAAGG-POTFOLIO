import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import SQL from "../assets/sql-server.png"

import project1 from "../assets/my_demo_site.png"
import project2 from "../assets/app_project.jpg"
import project3 from "../assets/portfolio_site.jpg"
import project4 from "../assets/Dashboard.jpg"

import dark_arrow_down from "../assets/dark-arrow-down.png"
import light_arrow_down from "../assets/light-arrow-down.png"

function HomePage() {
    const [moveDown, setMoveDown] = useState(false);

    function moveDown_Arrow() {
        setMoveDown(prev => {
            const next = !prev;
            if (typeof window !== "undefined") {
                const target = next ? window.innerHeight : 0;
                window.scrollTo({ top: target, behavior: "smooth" });
            }
            return next;
        });
    }

    return ( 
        <>
        <button onClick={moveDown_Arrow} className="fixed z-50 right-5 bottom-5 p-2 rounded-full shadow">
            <img className="w-7 h-auto" src={dark_arrow_down} alt="" />
        </button>

        <section className="flex justify-around items-center w-full mt-7 h-dvh p-10">
            <div className="inforSide flex-2">
                <h3 className="font-light">Wellcome to here,</h3>
                <h1 className="font-bold text-3xl my-1.5"><span className="span">I'm</span> Cabdirahman Ibrahim Cali (<span> Eng Maygaagg </span>)</h1>
                <h2 className="font-medium text-[22px]">Softwere Developer</h2>
                <p className="font-light w-xl mt-1">A software developer who builds responsive web applications using JavaScript and React. 
                Focuses on clean, maintainable code and effective collaboration with designers and engineers. 
                Enjoys solving complex problems and learning new technologies.
                </p>
                <div className="btns flex gap-6 mt-5">
                    <button className="px-4 py-2 rounded cursor-pointer transition-all">Hire Me</button>
                    <button className="px-4 py-2 rounded cursor-pointer transition-all">See Projects</button>
                </div>
            </div>
            <div className="iamgeSide flex-1">
                <div className="grediant_bg rounded">
                    <img className="ml-6 mr-5 z-10 rounded" width='300px' height='auto' src={MyPicture} alt="Me" />
                </div>
            </div>
            <div className="social_media mr-4 flex flex-col justify-center items-center gap-2.5">
                <span className="h-8"></span>
                <Link target="_black" to="https://www.linkedin.com/feed/"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={LinkedIn} alt="LinkedIn" /></Link>
                <Link target="_blank" to="https://github.com/Eng-Maygaagg"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={GitHub} alt="LinkedIn"/></Link>
                <Link target="_black" to="https://www.facebook.com/home.php"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={Facebook} alt="LinkedIn" /></Link>
                <Link target="_blank" to="https://wa.me/252634795728"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={WhatsApp} alt="WhatsApp" /></Link>
                <span className=" h-8"></span>
            </div>
        </section>

        {/* Skils Review Section */}
    <section className="Skills_Review flex flex-col p-8 transition-all">
        <h2 className="font-medium text-[18px] tracking-wider transition-all">Preview Skills</h2>
        <div className="skills_container grid grid-cols-5 gap-6 transition-all p-8 mt-7 rounded">
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
                <Link to='/skills'>See more...</Link>
            </div>
        </div>
    </section>

    {/* Preview Projects */}
    <section className="preview_projects flex flex-col transition-all">
        <h2 className="font-medium text-[18px] tracking-wider transition-all">Preview Projects</h2>
        <div className="projecs_container grid grid-cols-2 mt-4 gap-4 rounded">
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
        </div>
    </section>
        </>
     );
}

export default HomePage;