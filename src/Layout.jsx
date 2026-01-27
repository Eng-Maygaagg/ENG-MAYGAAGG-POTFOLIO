import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import "./input.css"

function LayOut() {
    return ( 
        <>
        <div className='body flex flex-col transition-all scroll-auto h-auto'>
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