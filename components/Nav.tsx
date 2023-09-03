"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import React from 'react'
import { Icons } from "./icons";




const Nav = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [expanded, setExpanded] = useState(false);

    const expand = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }





    return (
        <>
            <div className={`flex flex-row m-1 p-3 top-0 sticky z-50`}>
                <div className='flex flex-row items-center gap-1 '>

                  {/*   <button
                        className="transition-all duration-300 bg-[#98a498] text-white font-bold py-2 px-4 rounded"
                        onClick={expand}
                    >Menu</button>
                    {expanded && (
                        <div className="fixed inset-x-0 top-0 z-[50] bg-[#c9cfcf] opacity-95 flex items-center justify-center mx-auto">
                            <button className="absolute top-4 right-4 text-gray-200 hover:text-white focus:text-white" onClick={() => setExpanded(false)}>
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <ul className="text-[#393737] text-bold text-3xl p-3">
                                <li>
                                    <a href="#profile" className="block py-2" onClick={expand}>
                                        <p className="text-bold text-2xl">Profile</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience" className="block py-2" onClick={expand}>
                                        <p className="text-bold text-2xl">Experience</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="block py-2" onClick={expand}>
                                        <p className="text-bold text-2xl">Skills</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="block py-2" onClick={expand}>
                                        <p className="text-bold text-2xl">Projects</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact-me" className="block py-2" onClick={expand}>
                                        <p className="text-bold text-2xl">Contact Me</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    )} */}
                </div>
                <div className="nav_right_item">
                    <div className='flex flex-row items-center gap-1 '>
                        <Icons.download />
                        <a href={"/Resume-Leong-Tin-Jet-web-3-9-2023.pdf"} download>Resume</a>
                    </div>

               {/*      <div className='flex flex-row items-center gap-1'>
                        {
                            theme === "light-grey" ?
                                <Icons.sun /> : <Icons.moon />
                        }
                        <button onClick={() => theme === "light-grey" ? setTheme("dark") : setTheme("light-grey")}>
                            Theme
                        </button>
                    </div> */}
                </div>

            </div>


        </>
    )
}

export default Nav