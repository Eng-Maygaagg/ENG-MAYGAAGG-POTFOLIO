import React from 'react';
import skills_hero_img from "../assets/skills_hero.png"

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/JavaScrip.png"
import Reactjs from "../assets/React.png"
import TailwindCSS from "../assets/tailwindCSS.png"

import NodeJs from "../assets/node-js.png"
import ExpressJs from "../assets/express-js.png"
import PHP from "../assets/php.png"
import Java from "../assets/Java.png"

import MongoDB from "../assets/mongodb.png"
import SQL from "../assets/sql-server.png"

import Git from "../assets/Git.png"
import GitHub from "../assets/github-1.png"
import Postman from "../assets/postman.png"

function SkillsPage() {
    return ( 
        <>
            <section className="hero_skills flex flex-col justify-center items-center min-h-dvh p-4 sm:p-8 md:p-12 lg:p-20 mt-24 sm:mt-32 md:mt-40 w-full relative">
                <img src={skills_hero_img} className='rounded shadow w-full max-w-4xl h-auto' alt="Skills" />
                <div className="skills_hero_text flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 rounded absolute w-[90%] max-w-[600px] h-auto shadow mx-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <h2 className='font-semibold text-lg sm:text-xl md:text-2xl tracking-wider'>My Skills</h2>
                    <p className='font-light text-xs sm:text-[13px] md:text-[14px] text-center mt-2 tracking-wide'>I build robust, maintainable web applications using modern JavaScript frameworks 
                       and best practices. I have strong problem-solving skills and experience with frontend 
                       and backend development, including responsive design, API integration, and state management. 
                       I'm committed to continuous learning, writing clean, testable code, and collaborating effectively in agile teams.</p>
                </div>
            </section>

            <section className="skills_container flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-20 mt-12 md:mt-20">
                <h2 className='font-semibold text-lg sm:text-xl tracking-wider'>Skills Set</h2>
                <div className="skills_container flex flex-col lg:flex-row gap-6 w-full h-auto">
                {/* Front-End Skills Section */}
                    <div className="skills_cards mt-16 p-5">
                        <div className="top_part">
                            <h3 className='font-medium text-xl mb-1 tracking-wider'>Front-End Skills</h3>
                            <p className='font-light text-[16px] tracking-wide'>I use <strong className='font-semibold'>HTML, CSS, JavaScript, React,</strong> and <strong className='font-semibold'>Tailwind CSS</strong> to 
                           build responsive, accessible, and interactive front-end applications.</p>
                        </div>
                        <div className="cards flex flex-wrap  py-5 gap-4 transition-all">
                            <div className="card flex flex-col gap-2 cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                                <img src={HTML} width="50px" height="auto" alt="" />
                                {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col gap-2 cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={CSS} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col gap-2 cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={TailwindCSS} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col gap-2 cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={JS} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col gap-2 cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={Reactjs} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                    </div>
                </div>

                {/* Back-End Skills Section */}
                <div className="skills_cards mt-16 p-5">
                    <div className="top_part">
                        <h3 className='font-medium text-xl mb-1 tracking-wider'>Back-End Skills</h3>
                        <p className='font-light text-[16px] tracking-wide'>I work with back-end technologies such as <strong className='font-semibold'>Node.js</strong>, <strong className='font-semibold'>Express.js</strong>, <strong className='font-semibold'>PHP</strong>, <strong className='font-semibold'>Java</strong>, 
                                and others to build scalable server-side applications and APIs.</p>
                    </div>
                    <div className="cards flex flex-wrap  py-5 gap-4">
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={NodeJs} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={ExpressJs} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={PHP} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={Java} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills_container flex flex-col lg:flex-row gap-6 w-full h-auto">
            {/* Database Skills Section */}
                <div className="skills_cards mt-3 p-5">
                    <div className="top_part">
                        <h3 className='font-medium text-xl mb-1 tracking-wider'>Database Skills</h3>
                        <p className='font-light text-[16px] tracking-wide'>I work with database technologies like <strong className='font-semibold'>MongoDB</strong> and <strong className='font-semibold'>SQL</strong> to build scalable, 
                                data-driven backend systems and APIs.</p>
                    </div>
                    <div className="cards flex flex-wrap  py-5 gap-4">
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={MongoDB} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={SQL} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                    </div>
                </div>

                 {/* Tool & Technologies Skills Section */}
                <div className="skills_cards mt-3 p-5">
                    <div className="top_part">
                        <h3 className='font-medium text-xl mb-1 tracking-wider'>Tools & Technologies</h3>
                        <p className='font-light text-[16px] tracking-wide'>I use tools like <strong className='font-semibold'>Git, GitHub, Postman,</strong> and other technologies 
                                to enhance development workflow and collaboration.</p>
                    </div>
                    <div className="cards flex flex-wrap  py-5 gap-4">
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={Git} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={GitHub} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                        <div className="card flex flex-col cursor-pointer p-4 rounded-xl justify-center items-center h-[75px] w-[90px] hover:scale-105 transition-all">
                            <img src={Postman} width="50px" height="auto" alt="" />
                            {/* <p className='font-medium text-[16px]'>HTML</p> */}
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
     );
}

export default SkillsPage;