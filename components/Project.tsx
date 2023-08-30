"use client"
import React, { useEffect, useState } from 'react'
import Project_card from './Project_card'

import { useRouter } from 'next/navigation'
import { Filter } from 'lucide-react'

const projects = [
    {
        title: "Official website of Computer Science Society of University of Nottingham Malaysia(UNM CSS)",
        sourcecode: "https://github.com/UoN-Computer-Science-Society/",
        livedemo: 'https://unmcss.com',
        feature: ['VS-Code Theme', 'Showcase upcoming event,previous event', 'FAQ section', 'Email subscription',],
        tag: ["Next.js", "Typescript", "Tailwind CSS"],
        cover: "/project/computer.svg",
        type: "Web"
    },
    {
        title: "Admin Dashboard for UNM CSS Official Website ",
        sourcecode: "https://github.com/UoN-Computer-Science-Society/",
        livedemo: 'https://dashboard.unmcss.com',
        feature: ['Simple dashboard design', 'Image Uploading', 'User Authentication using Clerk', 'Manage annoucement,committee,position open,upcoming event,previous event,partners,faq'],
        tag: ["Next.js", "Typescript", "Tailwind CSS", "Prisma"],
        cover: "/project/computer.svg",
        type: "Web"
    },
    {
        title: "My personal portfolio",
        sourcecode: "https://github.com/tinjet11/portfolio",
        tag: ["Next.JS", "Typescript", "Tailwind CSS"],
        livedemo: 'https://tinjet.vercel.app',
        cover: "/project/computer.svg",
        type: "Web"
    },
    {
        title: 'Premium Car Rental Booking Website',
        sourcecode: "https://github.com/tinjet11/car_rental",
        tag: ["HTML", "CSS", "Javascript", "PHP"],
        cover: "/project/computer.svg",
        type: "Web"
    },
    {
        title: 'Product Price Checking App ',
        sourcecode: "https://github.com/tinjet11/telecell_price_checker",
        feature: ["Effortless Price Lookup", "Comprehensive Product Insights", "substantial improvement in business efficiency", " empowering sales personnel to promptly retrieve essential product details", " streamlining operations and reducing communication delays"],
        tag: ["Flutter", "Mobile APP Development", "Clean architeture", "Bloc", "Dart"],
        cover: "/project/mobile.svg",
        type: "Mobile"
    }
]
const Project = () => {
    const router = useRouter();
    const [params, setParams] = useState("");

    const updateSearchParams = (title: string, value: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        searchParams.set(title, value);

        setParams(searchParams.toString());

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        return newPathname;
    };


    const handleUpdateParams = (type: string) => {
        const newPathName = updateSearchParams("type", type);
        router.push(newPathName);
    }


    return (
        <>
            <div id='projects'>

                <h1 className='text-left header-1 my-3'>Project</h1>
                <div className="flex items-center gap-4 p-3 rounded-lg border-2">
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5" /> 
                        Filter
                    </div>
                    <button className="text-blue-500 font-semibold hover:underline focus:outline-none" onClick={() => handleUpdateParams("All")}>All</button>
                    <button className="text-blue-500 font-semibold  hover:underline focus:outline-none" onClick={() => handleUpdateParams("Web")}>Web Development</button>
                    <button className="text-blue-500 font-semibold  hover:underline focus:outline-none" onClick={() => handleUpdateParams("Mobile")}>Mobile App Development</button>
                </div>

                <div className='flex flex-col items-center sm:items-start'>

                    <div className='w-full grid grid-cols-1 sm:grid-cols-2'>
                        {(params === "type=All" || params === "") &&
                            projects.map((item, index) => (
                                <Project_card
                                    key={index}
                                    title={item.title}
                                    sourcecode={item.sourcecode}
                                    livedemo={item.livedemo}
                                    feature={item.feature}
                                    tag={item.tag}
                                    cover={item.cover}
                                />
                            ))}

                        {params === "type=Web" &&
                            projects.filter(project => project.type === "Web").map((item, index) => (
                                <Project_card
                                    key={index}
                                    title={item.title}
                                    sourcecode={item.sourcecode}
                                    livedemo={item.livedemo}
                                    feature={item.feature}
                                    tag={item.tag}
                                    cover={item.cover}
                                />
                            ))}
                        {params === "type=Mobile" &&
                            projects.filter(project => project.type === "Mobile").map((item, index) => (
                                <Project_card
                                    key={index}
                                    title={item.title}
                                    sourcecode={item.sourcecode}
                                    livedemo={item.livedemo}
                                    feature={item.feature}
                                    tag={item.tag}
                                    cover={item.cover}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project