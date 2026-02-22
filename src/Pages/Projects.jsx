import React from 'react';
import battern from "../assets/cubes.png"
import { useTheme } from "../ThemeContext";

import DemoOne from "../assets/my_demo_site.png"
import Portfolio from "../assets/portfolio_site.jpg"
import mobile_app from "../assets/app_project.jpg"
import CMS from "../assets/contact_managment_system.png"

// service one
import dark_fullStack from "../assets/dark_fullStack.png"
import light_fullStack from "../assets/light_fullStack.png"

import dark_front_end from "../assets/dark_Front_End.png"
import light_front_end from "../assets/light_Front_end.png"

import dark_back_end from "../assets/dark_server.png"
import light_back_end from "../assets/light_server.png"

// service two
import dark_database from "../assets/dark_db.png"
import light_database from "../assets/ligh_db.png"

import dark_Autho from "../assets/dark_autho.png"
import light_Autho from "../assets/light_autho.png"

import dark_Optimasion from "../assets/dark-optimization.png"
import light_Optimasion from "../assets/light_optimization.png"

// service tree
import dark_EditCode from "../assets/dark_editCode.png"
import light_EditCode from "../assets/light_editCode.png"

import dark_hosting from "../assets/dark-hosting.png"
import light_hosting from "../assets/light-hosting.png"

import dark_Mantanence from "../assets/dark-maintenance.png"
import light_Mantanence from "../assets/light-maintenance.png"

// service four
import dark_Consulting from "../assets/dark-technical-support.png"
import light_Consulting from "../assets/light-technical-support.png"

import dark_Solution from "../assets/dark-solutions.png"
import light_Solution from "../assets/light-solutions.png"

function ProjectsPage() {
    const { theme, toggleTheme } = useTheme();
    return ( 
        <>
            <section className="Projects_hero flex flex-col items-center w-full h-lvh p-10">
                <div className="cover_bg"></div>
                <div className="Top_text p-16 rounded shadow flex flex-col justify-center mt-32 items-center w-[800px] bg-cover bg-center bg-repeat">
                    <h2 className='font-semibold text-2xl text-center mb-4 tracking-wider'>My Projects</h2>
                    <p className='text-[16px] text-center tracking-wide'>These projects showcase my journey as a software developer, combining technical skills with creative problem-solving. 
                        I build scalable, responsive, and user-friendly applications using modern technologies like React, Node.js, and databases. 
                        Each project reflects how I turn ideas into real-world digital solutions and continuously improve my development approach.
                    </p>
                </div>
            </section>

            <section className='projects flex flex-col items-center w-full mb-10 p-10'>
                <h2 className='font-semibold text-2xl tracking-wider text-center mb-8'>Projects</h2>
                <div className="projuct_container w-[90%] grid grid-cols-2 gap-5">

                     <div className="project_card flex flex-col col-span-2">
                        <img src={DemoOne} alt="" />
                        <div className="project_info card flex flex-col p-10 w-full">
                            <h3 className='font-medium text-lg tracking-wider mb-1'><strong>Title:</strong> DemoOne</h3>
                            <p className='text-[16px] tracking-wide'><strong>Description:</strong> This project is contain small projects I build duiring my software development learning journey, 
                               like Hotale Booking Section, Calculator, Todo App and etc.</p>
                            <h3 className='font-medium text-[18px] tracking-wider mt-1'><strong>Tech Stack:</strong> HTML, CSS, TailwindCSS, JavaScript, and React</h3>
                            <div className="btns flex mt-2 gap-4">
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>Live</button>
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>GitHub</button>
                            </div>
                        </div>
                    </div>

                    <div className="project_card flex flex-col row-span-2">
                        <img src={mobile_app} alt="" />
                        <div className="project_info card flex flex-col p-10 w-full">
                            <h3 className='font-medium text-lg tracking-wider mb-1'><strong>Title:</strong> Mobile App</h3>
                            <p className='text-[16px] tracking-wide'><strong>Description:</strong> This project is contain small projects I build duiring my software development learning journey, 
                               like Hotale Booking Section, Calculator, Todo App and etc.</p>
                            <h3 className='font-medium text-[18px] tracking-wider mt-1'><strong>Tech Stack:</strong> Front-End: TailwindCSS & React-Nativ</h3>
                            <div className="btns flex mt-2 gap-4">
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>Live</button>
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>GitHub</button>
                            </div>
                        </div>
                    </div>

                    <div className="project_card flex flex-col col-span-1">
                        <img src={CMS} alt="" />
                        <div className="project_info card flex flex-col p-10 w-full">
                            <h3 className='font-medium text-lg tracking-wider mb-1'><strong>Title:</strong> Contact Managment System</h3>
                            <p className='text-[16px] tracking-wide'><strong>Description:</strong> This is Full-Stack project contain <strong>front-end</strong> were you can see list of contacts, add new one, edit & delete, and <strong>back-end</strong> were you data is prossesed and stored.</p>
                            <h3 className='font-medium text-[18px] tracking-wider mt-1'><strong>Tech Stack:</strong> Front-End: TailwindCSS & React, Back-End: Node.js, Express.js & MongoDB</h3>
                            <div className="btns flex mt-2 gap-4">
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>Live</button>
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>GitHub</button>
                            </div>
                        </div>
                    </div>

                    <div className="project_card flex flex-col col-span-1">
                        <img src={Portfolio} alt="" />
                        <div className="project_info card flex flex-col p-10 w-full">
                            <h3 className='font-medium text-lg tracking-wider mb-1'><strong>Title:</strong> Portfolio Website</h3>
                            <p className='text-[16px] tracking-wide'><strong>Description:</strong> This project is contain small projects I build duiring my software development learning journey, 
                               like Hotale Booking Section, Calculator, Todo App and etc.</p>
                            <h3 className='font-medium text-[18px] tracking-wider mt-1'><strong>Tech Stack:</strong> Front-End: HTML, CSS & JavaScript</h3>
                            <div className="btns flex mt-2 gap-4">
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>Live</button>
                                <button className='px-4 py-1 font-medium text-[18pxs] rounded hover:scale-105 transition-all'>GitHub</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="Services flex flex-col items-center w-full px-10 mb-5">
                <h2 className='font-semibold text-2xl tracking-wider transition-all'>My Services</h2>
                
                <div className="services_container flex flex-col mt-10 p-10 gap-28 transition-all">
                    
                    {/* services one */}
                    <div className="service_sec flex flex-col justify-center items-start w-full">
                        <span className='line w-6xl h-0.5 bg-amber-200 relative transition-all'><h3 className='title absolute text-center transition-all -top-4 px-2 left-5 rounded font-medium text-lg bg-amber-50'>Development</h3></span>
                        <div className="cards grid grid-cols-2 mt-10 transition-all gap-5">
                            {/* card 1 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_fullStack : light_fullStack} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all'>Full-Stack Development</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I build complete web applications from frontend to backend, 
                                        ensuring performance, scalability, and clean architecture.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 2 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_front_end : light_front_end} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all'>Frontend Development (UI/UX Focused)</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I create responsive, interactive, and modern user 
                                                interfaces using React and modern CSS frameworks like TailwindCSS, Bootstrap & etc.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 3 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_back_end : light_back_end} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all'>Backend & API Development</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I design secure and scalable backend systems and 
                                                RESTful APIs to support complex applications.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>
                        </div>
                    </div>

                    {/* services two */}
                    <div className="service_sec flex flex-col justify-center items-start w-full">
                        <span className='line w-6xl h-0.5 bg-amber-200 relative transition-all'><h3 className='title absolute text-center transition-all -top-4 px-2 left-5 rounded font-medium text-lg bg-amber-50'>Engineering</h3></span>
                        <div className="cards grid grid-cols-2 mt-10 transition-all gap-5">
                            {/* card 1 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_database : light_database} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Database Design & Integration</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I design efficient database structures and integrate databases 
                                               like MongoDB and SQL to ensure reliable data management.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 2 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_Autho : light_Autho} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Authentication & Authorization Systems</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I implement secure login systems using JWT, role-based access control, 
                                                and best security practices.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 3 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_Optimasion : light_Optimasion} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Performance Optimization</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I improve website speed and performance by 
                                                optimizing code, assets, and API responses.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>
                        </div>
                    </div>

                    {/* service tree */}
                    <div className="service_sec flex flex-col justify-center items-start w-full">
                        <span className='line w-6xl h-0.5 bg-amber-200 relative transition-all'><h3 className='title absolute text-center transition-all -top-4 px-2 left-5 rounded font-medium text-lg bg-amber-50'>Optimization & Deployment</h3></span>
                        <div className="cards grid grid-cols-2 mt-10 transition-all gap-5">
                            {/* card 1 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_EditCode : light_EditCode} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Code Refactoring & Clean Architecture</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I improve existing codebases by restructuring them for better 
                                                readability, maintainability, and scalability.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 2 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_hosting : light_hosting} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Deployment & Hosting Setup</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I deploy applications to platforms like Vercel, Netlify, or cloud 
                                                servers and configure domains.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 3 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_Mantanence : light_Mantanence} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Web App Maintenance & Updates</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I provide ongoing support, updates, and improvements for existing web applications.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>
                        </div>
                    </div>

                    {/* service four */}
                    <div className="service_sec flex flex-col justify-center items-start w-full">
                        <span className='line w-6xl h-0.5 bg-amber-200 relative transition-all'><h3 className='title absolute text-center transition-all -top-4 px-2 left-5 rounded font-medium text-lg bg-amber-50'>Consulting</h3></span>
                        <div className="cards grid grid-cols-2 mt-10 transition-all gap-5">
                            {/* card 1 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_Consulting : light_Consulting} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Technical Consulting</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I help individuals or teams choose the right technologies and 
                                                architecture for their projects.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>

                            {/* card 2 */}
                            <div className="card flex flex-col justify-center items-center p-5 rounded shadow transition-all">
                                <div className='serv_top_part flex justify-center items-center w-full gap-5 transition-all'>
                                    {/* .left_side */}
                                    <img className='flex-1 transition-all p-2 rounded' src={theme != 'dark' ? dark_Solution : light_Solution} alt="" />
                                    {/* right_side */}
                                    <div className="serv_info_part flex flex-col flex-4 transition-all">
                                        <h2 className='font-semibold text-lg transition-all tracking-wide'>Custom Software Solutions</h2>
                                        <p className='font-light text-[16px] tracking-wide mt-0.5 transition-all'>I build tailored software solutions based on specific business or personal needs.</p>
                                    </div>
                                </div>
                                <button className='px-4 py-1.5 font-medium rounded w-full mt-4 transition-all'>Take</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
     );
}

export default ProjectsPage;