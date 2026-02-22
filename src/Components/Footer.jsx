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
            <footer className='w-full flex justify-center items-center sticky bottom-0 p-8 transition-all text-center'>
                <div className="logo_section flex flex-col items-start transition-all justify-center p-5 flex-1">
                    <div className="logo flex flex-col justify-center items-start transition-all">
                        <img src={theme != 'dark' ? light_Logo : dark_Logo} width="200px" height="auto" alt="logo" />
                        <p>Softwate Developer</p>
                    </div>
                    <h3 className='font-medium mt-6 transition-all'>Follow Me On:</h3>
                    <div className="media_links flex gap-2 mt-2 transition-all">
                        <Link target="_black" to="https://www.linkedin.com/feed/"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={LinkedIn} alt="LinkedIn" /></Link>
                        <Link target="_blank" to="https://github.com/Eng-Maygaagg"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={GitHub} alt="LinkedIn"/></Link>
                        <Link target="_black" to="https://www.facebook.com/home.php"><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={Facebook} alt="LinkedIn" /></Link>
                        <Link target="_black" to=""><img className="w-7 h-auto hover:scale-110 transition-all cursor-pointer" src={WhatsApp} alt="LinkedIn" /></Link>
                    </div>
                </div>

                <div className="Links_section flex flex-col flex-2 p-5 transition-all">
                    <nav className="flex gap-4.5 transition-all">
                        <Link className="link font-medium transition-all" to='/' >Home</Link>
                        <Link className="link font-medium transition-all "  to='/about' >About</Link>
                        <Link className="link font-medium transition-all"  to='/skills' >Skills</Link>
                        <Link className="link font-medium transition-all"  to='/projects' >Projects</Link>
                        {/* <Link className="link font-medium transition-all"  to='/services' >Services</Link> */}
                        <Link className="link font-medium transition-all"  to='/resume' >Resume</Link>
                        <Link className="link font-medium transition-all"  to='/contact' >Contacts</Link>
                    </nav>
                    <div className="aboute_me mt-8 text-left">
                        <h3 className='font-medium text-[18px] transition-all'><strong>About Me</strong></h3>
                        <p className='font-light text-[14px] transition-all'>I build scalable web applications using modern JavaScript frameworks and clean design principles. I enjoy solving complex problems and continuously learning new technologies to deliver reliable, user-centered solutions.</p>
                    </div>
                </div>

                <div className="contact_section flex flex-1 p-5 transition-all">
                    <span className='w-0.5 h-full bg-amber-300 opacity-50 rounded-full transition-all'></span>
                    <div className="contact flex flex-col ml-4 justify-center items-start gap-2">
                        <div className="phone flex flex-col items-start">
                            <strong className='transition-all'>Phone:</strong>
                            <p className='transition-all'>+252 63 4795728</p>
                        </div>
                        <div className="email flex flex-col items-start">
                            <strong className='transition-all'>Email:</strong>
                            <p className='transition-all'>cabdirahmanibraahin448@gamil.com</p>
                        </div>
                        <div className="sendEmail mt-6">
                            <input className='border outline-0 px-1 py-0.5 rounded-bl-sm rounded-tl-sm transition-all' type="email" name="email" placeholder='Send email for me' />
                            <button className='px-1 ml-0.5 py-0.5 font-light text-[16px] border border-blue-700 bg-blue-500 rounded-br-sm rounded-tr-sm cursor-pointer transition-all'>Send</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;