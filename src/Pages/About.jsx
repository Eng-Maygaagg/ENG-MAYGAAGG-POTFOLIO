import React from "react";
import Header from "../Components/Header";

// For Top Section
import My_Picture from "../assets/MyPicture.jpeg"

import dark_Front_End from "../assets/dark_Front_End.png"
import light_Front_End from "../assets/light_Front_end.png"

import dark_Back_End from "../assets/dark_server.png"
import light_Back_End from "../assets/light_server.png"

import dark_MobilApp from "../assets/dark_MobileApp.png"
import light_MobilApp  from "../assets/light_MobileApp.png"

import dark_DB from "../assets/dark_db.png"
import light_DB from "../assets/ligh_db.png"

import dark_UI_UX from "../assets/dark_UI_UX.png"
import light_UI_UX from "../assets/light_UI_UX.png"

import dark_FullStack from "../assets/dark_fullStack.png"
import light_FullStack from "../assets/light_fullStack.png"

// For Journey section
import dark_University from "../assets/university.png"
import light_University from "../assets/light-university.png"

import dark_collage from "../assets/dark-book.png"
import light_collage from "../assets/light-book.png"

import dark_academy from "../assets/dark-laptop.png"
import light_academy from "../assets/ligh-laptop.png"

import { useTheme } from "../ThemeContext";

function AboutePage() {
    const { theme, toggleTheme } = useTheme();
    

    return ( 
        <>
           <section className="about_hero flex flex-col md:flex-row justify-center items-center w-full min-h-dvh gap-6 md:gap-5 p-4 sm:p-8 md:p-12 lg:p-20 mt-20 md:mt-10">
                <div className="image_side flex-1 flex justify-center">
                    <img className="rounded w-full max-w-[280px] sm:max-w-[320px] h-auto" src={My_Picture} alt="My Picture" />
                </div>
                <div className="main_txt flex-1 md:flex-2 md:mr-5 w-full max-w-2xl">
                    <h2 className="font-bold text-xl mb-1.5">Eng Cabdirahman Ibrahim Cali <span>(Eng. Maygaagg)</span></h2>
                    <p className="text-[16px] opacity-85 tracking-wide">
                        I’m a passionate software developer focused on building clean, efficient, and scalable applications.
                        I solve real-world problems using well-structured code and modern technologies.
                        I have experience building responsive web applications with React, Node.js, and RESTful APIs.
                        I enjoy collaborating with cross-functional teams, mentoring junior developers, and continuously improving my skills.
                        In my free time I contribute to open-source projects and explore new tools and best practices.
                    </p>
                    <div className="roles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-3 justify-items-center lg:justify-items-start">
                        <div className="card flex flex-col shadow justify-center items-center rounded cursor-pointer w-full max-w-[180px] p-2">
                            <img width="50px" height="auto" src={theme != 'dark' ? dark_Front_End : light_Front_End} alt="FrontEnd" />
                            <h3 className="font-medium text-[14px] sm:text-[15px] mt-2 text-center">Front-end Developer</h3>
                        </div>
                        <div className="card flex flex-col shadow justify-center items-center rounded cursor-pointer w-full max-w-[180px] p-2">
                            <img width="50px" height="auto" src={theme != 'dark' ? dark_Back_End : light_Back_End} alt="BackEnd" />
                            <h3 className="font-medium text-[14px] sm:text-[15px] mt-2 text-center">Back-end Developer</h3>
                        </div>
                        <div className="card flex flex-col shadow justify-center items-center rounded cursor-pointer w-full max-w-[180px] p-2">
                            <img width="50px" height="auto" src={theme != 'dark' ? dark_FullStack : light_FullStack} alt="FullStack" />
                            <h3 className="font-medium text-[14px] sm:text-[15px] mt-2 text-center">Full-stack Developer</h3>
                        </div>
                        <div className="card flex flex-col shadow justify-center items-center rounded cursor-pointer w-full max-w-[180px] p-2">
                            <img width="50px" height="auto" src={theme != 'dark' ? dark_MobilApp : light_MobilApp} alt="MobileApp" />
                            <h3 className="font-medium text-[14px] sm:text-[15px] mt-2 text-center">Mobile App Developer</h3>
                        </div>
                        <div className="card flex flex-col shadow justify-center items-center rounded cursor-pointer w-full max-w-[180px] p-2">
                            <img width="50px" height="auto" src={theme != 'dark' ? dark_UI_UX : light_UI_UX} alt="UIUX" />
                            <h3 className="font-medium text-[14px] sm:text-[15px] mt-2 text-center">UI/UX Designer</h3>
                        </div>
                        <div className="card flex flex-col shadow justify-center items-center rounded cursor-pointer w-full max-w-[180px] p-2">
                            <img width="50px" height="auto" src={theme != 'dark' ? dark_DB : light_DB} alt="Database" />
                            <h3 className="font-medium text-[14px] sm:text-[15px] mt-2 text-center">Database Developer</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Journey Section */}
            <section className="About_journey_sec flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-20">
                <div className="top_part text-center">
                    <h2 className="font-medium text-lg sm:text-xl mb-3">My Journey</h2>
                    <p className="w-full max-w-[600px] mx-auto text-sm sm:text-base px-2">
                        I started my journey at an ICT college where I developed a strong interest in IT and software development.
                        I later studied Computer Science and completed a Full-stack Web Development program at Telesom Academy.
                    </p>
                </div>

                <div className="journey flex flex-col lg:flex-row justify-evenly items-center w-full mt-8 lg:mt-10 gap-6 lg:gap-0">
                    {/* left_part */}
                    <div className="left_part flex flex-col justify-center items-center lg:items-start gap-4 w-full max-w-[320px]">
                        <div className="card_hide hidden lg:block w-[320px] h-[130px]"></div>
                         <div className="card w-full max-w-[320px] p-4 sm:p-5 items-start flex flex-col justify-center cursor-pointer rounded-xs">
                            <div className="title flex justify-evenly items-center w-full">
                                <img width="40px" height="auto" src={theme != 'dark' ? dark_University : light_University} alt="University"/>
                                <h3 className="font-medium text-base sm:text-lg">University</h3>
                            </div>
                            <p className="font-light mt-3 text-[13px] sm:text-[14px]">I'm in the university's Faculty of Computer Science, 
                                where I gained a solid foundation in programming & software development.</p>
                        </div>
                        <div className="card_hide hidden lg:block w-[320px] h-[130px]"></div>
                    </div>
                    
                    {/* center_part - visible on lg only */}
                    <div className="center_part relative hidden lg:block">
                        <span className="line flex w-0.5 h-[450px] bg-amber-600 relative"></span>
                        <span className="dot flex justify-center items-center w-[20px] h-[20px] absolute top-[70px] -left-[9px] rounded-full bg-amber-100"><span className="d w-[6px] h-[6px] bg-amber-400 flex rounded-full z-10"></span></span>
                        <span className="dot flex justify-center items-center w-[20px] h-[20px] absolute top-[220px] -left-[9px] rounded-full bg-amber-100"><span className="d w-[6px] h-[6px] bg-amber-400 flex rounded-full z-10"></span></span>
                        <span className="dot flex justify-center items-center w-[20px] h-[20px] absolute top-[370px] -left-[9px] rounded-full bg-amber-100"><span className="d w-[6px] h-[6px] bg-amber-400 flex rounded-full z-10"></span></span>
                    </div>
                    
                    {/* right_part */}
                    <div className="right_part flex flex-col justify-center items-center lg:items-start gap-4 w-full max-w-[320px]">
                        <div className="card w-full max-w-[320px] p-4 sm:p-5 items-start flex flex-col justify-center cursor-pointer rounded-xs">
                            <div className="title flex justify-evenly items-center w-full">
                                <img width="40px" height="auto" src={theme != 'dark' ? dark_collage : light_collage} alt="Collage"/>
                                <h3 className="font-medium text-base sm:text-lg">Collage</h3>
                            </div>
                            <p className="font-light mt-3 text-[13px] sm:text-[14px]">At the Collage of ICT, I gained comprehensive knowledge in 
                                    information technology, programming, and software development.</p>
                        </div>
                        <div className="card_hide hidden lg:block w-[320px] h-[130px]"></div>
                        <div className="card w-full max-w-[320px] p-4 sm:p-5 items-start flex flex-col justify-center cursor-pointer rounded-xs">
                            <div className="title flex justify-evenly items-center w-full">
                                <img width="40px" height="auto" src={theme != 'dark' ? dark_academy : light_academy} alt="Academy"/>
                                <h3 className="font-medium text-base sm:text-lg">Academy</h3>
                            </div>
                            <p className="font-light mt-3 text-[13px] sm:text-[14px]">I studied at an academy where I mastered full-stack web development using 
                                    modern front-end frameworks and back-end technologies to build scalable web applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Focus & Future Goal */}
            <section className="About_Focus_Gaol flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-20 transition-all">
                <h2 className="font-medium text-lg sm:text-xl mb-4 sm:mb-6">Current Focus & Future Goal</h2>
              <div className="focus_Goal flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full max-w-4xl">
                  <div className="foces_sec card transition-all hover:border-0 rounded p-4 sm:p-6 flex flex-col justify-center items-center w-full max-w-md">
                    <h3 className="font-bold text-xl mb-3 transition-all">Current Focuse</h3>
                    <p className="font-medium text-[16px] text-center transition-all">Currently, I’m focused on full-stack development, working with modern 
                       JavaScript frameworks, backend technologies, and databases to build 
                       production-ready applications.</p>
                </div>
                <div className="gaol_sec card rounded p-4 sm:p-5 transition-all flex flex-col justify-center items-center w-full max-w-md">
                    <h3 className="font-bold text-xl mb-3 transition-all">Future Goal</h3>
                    <p className="font-medium text-[16px] text-center transition-all">My goal is to grow into a professional software engineer, 
                       contribute to impactful projects, and continuously improve my 
                       skills while working with innovative teams or clients.</p>
                </div>
              </div>
            </section>
        </>
     );
}

export default AboutePage;