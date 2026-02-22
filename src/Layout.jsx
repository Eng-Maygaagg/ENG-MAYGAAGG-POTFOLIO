import React, { useState } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import "./input.css"
import dark_arrow_down from "./assets/dark-arrow-down.png"
import light_arrow_down from "./assets/light-arrow-down.png"
import { useTheme } from "./ThemeContext";

function LayOut() {
    const [moveDown, setMoveDown] = useState(false);
    const { theme, toggleTheme } = useTheme();
    
        function moveDown_Arrow() {
            setMoveDown(prev => {
                const next = !prev;
                if (typeof window !== "undefined") {
                    const doc = document.documentElement;
                    const scrollHeight = Math.max(document.body.scrollHeight, doc.scrollHeight);
                    const clientHeight = doc.clientHeight || window.innerHeight;
                    const target = next ? Math.max(0, scrollHeight - clientHeight) : 0;
                    window.scrollTo({ top: target, behavior: "smooth" });
                }
                return next;
            });
        }

    return ( 
        <>
        <div className='body flex flex-col transition-all scroll-auto h-auto'>
            <button onClick={moveDown_Arrow} className="Arrow_Down fixed z-50 right-5 bottom-5 p-2 rounded-full shadow">
                <img className="w-7 h-auto" src={theme != 'dark' ? dark_arrow_down : light_arrow_down} alt="" />
            </button>
            <header><Header /></header>
            <div>
                <Outlet />
            </div>
            <footer><Footer /></footer>
        </div>
        </>
     );
}

export default LayOut;