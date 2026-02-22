import React from 'react';
import "../input.css"
import { Link } from 'react-router-dom';

import { useTheme } from "../ThemeContext";

import dark_Logo from "../assets/My_logo-dark1.png"
import light_Logo from "../assets/my_logo_light.png"
import LinkedIn from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import Facebook from "../assets/facebook.png"
import WhatsApp from "../assets/whatsapp.png"

function Footer() {
    const { theme, toggleTheme } = useTheme();
    return ( 
        <>
            <footer className='w-full flex flex-col lg:flex-row justify-center items-center sticky bottom-0 p-4 sm:p-6 lg:p-8 transition-all text-center'>
                <div className="logo_section flex flex-col items-center lg:items-start transition-all justify-center p-4 sm:p-5 flex-1 w-full">
                    <div className="logo flex flex-col justify-center items-center lg:items-start transition-all">
                        <img src={theme != 'dark' ? light_Logo : dark_Logo} className="w-40 sm:w-[200px] h-auto" alt="logo" />
                        <p className="text-sm sm:text-base">Softwate Developer</p>
                    </div>
                    <h3 className='font-medium mt-4 lg:mt-6 transition-all'>Follow Me On:</h3>
                    <div className="media_links flex gap-2 mt-2 transition-all justify-center lg:justify-start">
                        <Link target="_blank" to="https://www.linkedin.com/feed/"><img className="w-6 sm:w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={LinkedIn} alt="LinkedIn" /></Link>
                        <Link target="_blank" to="https://github.com/Eng-Maygaagg"><img className="w-6 sm:w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={GitHub} alt="GitHub"/></Link>
                        <Link target="_blank" to="https://www.facebook.com/home.php"><img className="w-6 sm:w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={Facebook} alt="Facebook" /></Link>
                        <Link target="_blank" to=""><img className="w-6 sm:w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={WhatsApp} alt="WhatsApp" /></Link>
                    </div>
                </div>

                <div className="Links_section flex flex-col flex-2 p-4 sm:p-5 transition-all w-full items-center lg:items-start">
                    <nav className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start transition-all">
                        <Link className="link font-medium transition-all" to='/' >Home</Link>
                        <Link className="link font-medium transition-all" to='/about' >About</Link>
                        <Link className="link font-medium transition-all" to='/skills' >Skills</Link>
                        <Link className="link font-medium transition-all" to='/projects' >Projects</Link>
                        <Link className="link font-medium transition-all" to='/resume' >Resume</Link>
                        <Link className="link font-medium transition-all" to='/contact' >Contacts</Link>
                    </nav>
                    <div className="aboute_me mt-6 lg:mt-8 text-center lg:text-left max-w-xl">
                        <h3 className='font-medium text-base sm:text-[18px] transition-all'><strong>About Me</strong></h3>
                        <p className='font-light text-[13px] sm:text-[14px] transition-all'>I build scalable web applications using modern JavaScript frameworks and clean design principles. I enjoy solving complex problems and continuously learning new technologies to deliver reliable, user-centered solutions.</p>
                    </div>
                </div>

                <div className="contact_section flex flex-1 p-4 sm:p-5 transition-all w-full justify-center lg:justify-start">
                    <span className='hidden lg:block w-0.5 min-h-[80px] bg-amber-300 opacity-50 rounded-full transition-all'></span>
                    <div className="contact flex flex-col lg:ml-4 justify-center items-center lg:items-start gap-2">
                        <div className="phone flex flex-col items-center lg:items-start">
                            <strong className='transition-all'>Phone:</strong>
                            <p className='transition-all text-sm sm:text-base'>+252 63 4795728</p>
                        </div>
                        <div className="email flex flex-col items-center lg:items-start">
                            <strong className='transition-all'>Email:</strong>
                            <p className='transition-all text-sm sm:text-base break-all'>cabdirahmanibraahin448@gamil.com</p>
                        </div>
                        <div className="sendEmail mt-4 lg:mt-6 flex flex-wrap justify-center">
                            <input className='border outline-0 px-2 py-1.5 rounded-bl-sm rounded-tl-sm transition-all w-40 sm:w-48 text-sm' type="email" name="email" placeholder='Send email for me' />
                            <button className='px-2 ml-0.5 py-1.5 font-light text-sm sm:text-[16px] border border-blue-700 bg-blue-500 rounded-br-sm rounded-tr-sm cursor-pointer transition-all'>Send</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;