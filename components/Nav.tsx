"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image'
import React from 'react'
import { Icons } from "./icons";

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
                    <div className='flex flex-row items-center gap-1 '>
                        <Icons.download />
                        <a href={"me.jpg"} download>Resume</a>
                    </div>

                    <div className='flex flex-row items-center gap-1'>
                        {
                            theme === "light" ?
                                <Icons.sun /> : <Icons.sun />
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