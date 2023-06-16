"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image'
import React from 'react'

const Nav = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className='flex flex-row m-1 p-3'>

                <div className="nav_right_item">
                    <div className='flex flex-row items-center '>
                        {
                            theme === "light" ? <Image
                                width={25}
                                height={25}
                                alt="download-black"
                                src={"/download-black.svg"}
                                className='object-contain pr-2'
                            /> : <Image
                                width={25}
                                height={25}
                                alt="download-white"
                                src={"/download-white.svg"}
                                className='object-contain pr-2'
                            />
                        }
                        <a href={"me.jpg"} download>Resume</a>
                    </div>

                    <div className='flex flex-row items-center '>
                        {
                            theme === "light" ? <Image
                                width={25}
                                height={25}
                                alt="sun"
                                src={"/sun.svg"}
                                className='object-contain pr-2'
                            /> : <Image
                                width={25}
                                height={25}
                                alt="moon"
                                src={"/moon.svg"}
                                className='object-contain pr-2'
                            />
                        }
                        <button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
                            Theme
                        </button>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Nav