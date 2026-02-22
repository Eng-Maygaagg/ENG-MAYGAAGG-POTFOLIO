import React from "react";
import { Link } from "react-router-dom";
import moon from "../assets/dark-moon.png";
import sun from "../assets/yellow-sun.png"
import ligh_logo from "../assets/my_logo_light.png"
import dark_logo from "../assets/My_logo-dark1.png"
import "../input.css"
import { useTheme } from "../ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return ( 
        <>
            <header className="flex fixed shadow top-0 transition-all justify-between w-full items-center p-6 px-10 z-50">
                <img className="w-1/8" src={theme !== "dark" ? ligh_logo : dark_logo} alt="Logo" />
                <nav className="flex gap-4.5">
                    <Link className="link font-medium transition-all" to='/' >Home</Link>
                    <Link className="link font-medium transition-all"  to='/about' >About</Link>
                    <Link className="link font-medium transition-all"  to='/skills' >Skills</Link>
                    <Link className="link font-medium transition-all"  to='/projects' >Projects</Link>
                    {/* <Link className="link font-medium transition-all"  to='/services' >Services</Link> */}
                    <Link className="link font-medium transition-all"  to='/resume' >Resume</Link>
                    <Link className="link font-medium transition-all"  to='/contact' >Contacts</Link>
                </nav>
                <div className="theame">
                    <img onClick={() => toggleTheme()} className="flex size-6 hover:scale-105 cursor-pointer transition-all" src={theme !== "dark" ? moon : sun} alt="theme-toggle" />
                </div>
            </header>
        </>
     );
}
 
export default Header;