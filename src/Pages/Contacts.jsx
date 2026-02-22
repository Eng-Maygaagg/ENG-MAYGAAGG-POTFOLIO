import React from "react";

import { useTheme } from "../ThemeContext";

import dark_phone from "../assets/dark_phone.png"
import light_phone from "../assets/light_phone.png"

import dark_location from "../assets/dark_location.png"
import light_location from "../assets/light_location.png"

import dark_mail from "../assets/dark_mail.png"
import light_mali from "../assets/light_mail.png"

import dark_whatsApp from "../assets/dark_whatsapp.png"
import light_whatsApp from "../assets/light_whatsapp.png"

import Contact_img from "../assets/contact_img.jpg"

function ContactPage() {
    const { theme, toggleTheme } = useTheme();
    return ( 
        <>
            <section className="Contacts_sec1 flex flex-col justify-center items-center w-full min-h-dvh gap-5 p-4 sm:p-6 md:p-10 mt-24 sm:mt-28 relative top-16 sm:top-20">
                <h2 className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-center">Contact With Me</h2>

                <div className="Form_Contacts flex flex-col lg:flex-row justify-evenly items-center w-full h-auto gap-8 lg:gap-10 p-4 sm:p-5">
                <form action="" className="flex flex-col justify-center items-center p-4 w-full max-w-[400px] h-auto rounded shadow">
                    <h2 className="font-semibold text-xl text-center mb-6">Get In Touch</h2>
                    <div className="box flex flex-col justify-center items-start gap-0.5 mb-4">
                        <label className="font-medium text-[16px]" htmlFor="">Full-Name</label>
                        <input className="px-2 py-1 border outline-0 rounded w-full max-w-[300px]" type="text" 
                        placeholder="Write your full-name..."
                        />
                    </div>
                    <div className="box flex flex-col justify-center items-start gap-0.5 mb-4">
                        <label className="font-medium text-[16px]" htmlFor="">Email</label>
                        <input className="px-2 py-1 border outline-0 rounded w-full max-w-[300px]" type="text" 
                        placeholder="Write your email..."
                        />
                    </div>
                    <div className="box flex flex-col justify-center items-start gap-0.5 mb-4">
                        <label className="font-medium text-[16px]" htmlFor="">Phone</label>
                        <input className="px-2 py-1 border outline-0 rounded w-full max-w-[300px]" type="text" 
                        placeholder="Write your phone number..."
                        />
                    </div>
                    <div className="box flex flex-col justify-center items-start gap-0.5 mb-4">
                        <label className="font-medium text-[16px]" htmlFor="">Massage</label>
                        <textarea className="px-2 py-1 border outline-0 rounded w-full max-w-[300px] h-[120px]" name="massage" placeholder="Write your massage here..." id=""></textarea>
                    </div>                    
                    <button className="px-6 sm:px-8 py-3 sm:py-4 rounded font-medium text-base sm:text-lg mt-4 sm:mt-5 w-full max-w-[300px] cursor-pointer">Submit</button>
                </form>
                <div className="contact_info flex flex-col justify-center items-center w-full max-w-[400px]">
                    <p className="font-light text-[16px] tracking-wider">Have a project in mind or want to work together? Feel free to reach out — 
                       I’m always open to new opportunities.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-6">
                        <div className="card p-3 rounded shadow flex flex-col justify-center items-center h-auto cursor-pointer">
                            <img width="60px" src={theme != 'dark' ? dark_phone : light_phone} alt="" />
                            <h3 className="font-medium text-lg mt-1.5 cursor-pointer tracking-wide">Location</h3>
                            <p className="font-light text-[16px] tracking-wide">Hargeisa, Somaliland</p>
                        </div>
                        <div className="card p-3 rounded shadow flex flex-col justify-center items-center h-auto cursor-pointer" >
                            <img width="60px" src={theme != 'dark' ? dark_location : light_location} alt="" />
                            <h3 className="font-medium text-lg mt-1.5 cursor-pointer tracking-wide">Phone Number</h3>
                            <p className="font-light text-[16px] tracking-wide">063 4795728</p>
                        </div>
                        <div className="card p-3 rounded shadow w-full max-w-[200px] flex flex-col justify-center items-center h-auto cursor-pointer">
                            <img width="60px" src={theme != 'dark' ? dark_mail : light_mali} alt="" />
                            <h3 className="font-medium text-lg mt-1.5 cursor-pointer tracking-wide">Email</h3>
                            <p className="flex font-light text-[16px] tracking-wide text-center">cabdirahmanibraahin
                                    448@gmail.com</p>
                        </div>
                        <div className="card p-3 rounded shadow w-auto flex flex-col justify-center items-center h-auto cursor-pointer">
                            <img width="60px" src={theme != 'dark' ? dark_whatsApp : light_whatsApp} alt="" />
                            <h3 className="font-medium text-lg mt-1.5 cursor-pointer tracking-wide">WhastApp Number</h3>
                            <p className="font-light text-[16px] tracking-wide">+252 63 4795728</p>
                        </div>
                        </div>
                </div>
                </div>
            </section>

            <section className="contacts_bottom flex flex-col justify-center items-center w-full min-h-dvh gap-5 p-4 sm:p-6 md:p-10 mb-10 mt-12 sm:mt-20 relative top-4 sm:top-10 transition-all">
                <img src={Contact_img} className="w-full max-w-[800px] h-auto object-cover" alt="Contact" />
                <div className="contact_text_bg absolute w-[90%] max-w-[600px] h-[160px] sm:h-[190px] blur-xs px-4 sm:px-8 py-4 rounded"></div>
                <div className="contact_text absolute w-[90%] max-w-[600px] h-auto px-4 sm:px-8 py-4 rounded shadow flex flex-col justify-center items-center transition-all">
                    <p className="font-medium text-base sm:text-lg text-center mt-2">Hire Me Now</p>
                    <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-center mt-2">I Always Ready To Build A Prevect Software.</h2>
                    <button className="py-1.5 cursor-pointer mt-3 px-3 font-medium text-xs rounded shadow hover:scale-105 transition-all">Get Started</button>
                </div>
            </section>
        </>
     );
}

export default ContactPage;