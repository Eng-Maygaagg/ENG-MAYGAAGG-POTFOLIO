import React, { useState } from "react";
import { Link } from "react-router-dom";
import moon from "../assets/dark-moon.png";
import sun from "../assets/yellow-sun.png"
import ligh_logo from "../assets/my_logo_light.png"
import dark_logo from "../assets/My_logo-dark1.png"
import Light_Menu from "../assets/light-menu.png"
import Dark_Menu from "../assets/dark-menu.png"
import "../input.css"
import { useTheme } from "../ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <>
            <header className="flex fixed shadow top-0 transition-all justify-between w-full items-center p-4 sm:p-6 sm:px-10 z-50">
                <img className="w-24 sm:w-28 md:w-32" src={theme !== "dark" ? ligh_logo : dark_logo} alt="Logo" />
                <nav className="hidden lg:flex gap-4 lg:gap-6">
                    <Link className="link font-medium transition-all" to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="link font-medium transition-all" to='/about' onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className="link font-medium transition-all" to='/skills' onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link className="link font-medium transition-all" to='/projects' onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link className="link font-medium transition-all" to='/resume' onClick={() => setMenuOpen(false)}>Resume</Link>
                    <Link className="link font-medium transition-all" to='/contact' onClick={() => setMenuOpen(false)}>Contacts</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <img onClick={() => toggleTheme()} className="size-5 sm:size-6 hover:scale-105 cursor-pointer transition-all" src={theme !== "dark" ? moon : sun} alt="theme-toggle" />
                    <button
                        type="button"
                        className="hidden max-lg:inline-flex p-2 rounded-md hover:opacity-80 [color:var(--text-color)] transition-all items-center justify-center md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                     <img src={theme == 'dark' ? Light_Menu : Dark_Menu} width="30px" height="30px" alt="" /> 
                    </button>
                </div>
            </header>
            {/* Mobile menu overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden top-0 pt-16"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
            <nav className={`fixed top-16 left-0 right-0 bg-inherit shadow-lg z-40 lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`} style={{ background: "var(--card-color)" }}>
                <div className="flex flex-col p-4 gap-2">
                    <Link className="link font-medium py-2 px-3 rounded hover:bg-black/5" to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="link font-medium py-2 px-3 rounded hover:bg-black/5" to='/about' onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className="link font-medium py-2 px-3 rounded hover:bg-black/5" to='/skills' onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link className="link font-medium py-2 px-3 rounded hover:bg-black/5" to='/projects' onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link className="link font-medium py-2 px-3 rounded hover:bg-black/5" to='/resume' onClick={() => setMenuOpen(false)}>Resume</Link>
                    <Link className="link font-medium py-2 px-3 rounded hover:bg-black/5" to='/contact' onClick={() => setMenuOpen(false)}>Contacts</Link>
                </div>
            </nav>
        </>
     );
}
 
export default Header;