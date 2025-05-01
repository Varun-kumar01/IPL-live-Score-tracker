import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Links = [
    { name: "Live Scores", path: "/LiveScores" },
    { name: "Schedule", path: "/Schedule" },  
    { name: "Teams", path: "/Teams" },  
    { name: "Stats", path: "/Stats" },  
    { name: "News", path: "/News" },  
]



export function Header(){

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);  
    }

    return (
        <>
            <div className='sticky top-0 z-50 flex items-center bg-white p-4 justify-between px-10 md:px-20 shadow-lg'>

                {/* Navbar */}
                <div>
                    <Link to="/" className='flex items-center'>
                        <div><button className='rounded-full bg-orange-600 p-1 text-white font-bold cursor-pointer'>IPL</button></div>
                        <div><h1 className='font-bold text-lg pl-3 cursor-pointer'>Score Tracker</h1></div>
                    </Link>
                </div>
                <div className='hidden md:flex items-center space-x-5'>
                    {Links.map((item) => {
                        return <div>
                            <Link to={item.path} className='text-black text-md transition-colors hover:text-orange-600 font-semibold'>{item.name}</Link>
                        </div>
                    })}
                </div>

                {/* Hamburger Menu */}
                <div className='md:hidden'>
                        <button className='p-1 rounded-md bg-white cursor-pointer' onClick={toggleMenu}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                </div>
                
            </div>

            {/* Mobile Menu */}
            {isOpen && <div className='md:hidden sticky top-16.25 z-40 flex flex-col space-y-1 w-full justify-center px-3  bg-white'>
                {Links.map((item) => {
                    return <div>
                        <Link to={item.path} className='text-black text-lg transition-colors hover:text-orange-600 font-semibold '>{item.name}</Link>
                    </div>
                })}
            </div>}
        </>
    );
};

