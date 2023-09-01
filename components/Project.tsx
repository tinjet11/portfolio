"use client"
import React, { Fragment, useEffect, useState } from 'react'
import Project_card from './Project_card'

import { useRouter } from 'next/navigation'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, Filter } from 'lucide-react'
import { Listbox, Transition } from '@headlessui/react'
import { projects, type } from './constant'



const Project = () => {
    const router = useRouter();
    const [params, setParams] = useState("type=All");
    const [isOpen, setIsOpen] = useState(false);

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
            <div className='mt-4'>

                <h1 className='text-left header-1 my-3'>Project</h1>
                <div className="flex items-center gap-4 p-3 rounded-lg sm:border-2 border-[#183f2c]">
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Filter
                    </div>

                    <button className={`${params === "type=All" ? 'text-[#43b1b1]' : 'text-[#a5afb9]'} sm:block hidden font-semibold hover:underline focus:outline-none`} onClick={() => handleUpdateParams("All")}>All</button>
                    <button className={`${params === "type=Web" ? 'text-[#43b1b1]' : 'text-[#a5afb9]'} sm:block hidden  font-semibold hover:underline focus:outline-none`} onClick={() => handleUpdateParams("Web")}>Web Development</button>
                    <button className={`${params === "type=Mobile" ? 'text-[#43b1b1]' : 'text-[#a5afb9]'} sm:block hidden  font-semibold hover:underline focus:outline-none`} onClick={() => handleUpdateParams("Mobile")}>Mobile App Development</button>

                    <div className='w-fit sm:hidden block'>
                        <Listbox
                            value={params}>
                            <div className='relative w-fit z-10'>
                                <Listbox.Button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
                                    <span className='block truncate'>{params.split("type=")}</span>
                                    {isOpen ?  <ChevronUpIcon /> : <ChevronDownIcon />}
                                </Listbox.Button>
                                {/* Transition for displaying the options */}
                                <Transition
                                    as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                                    leave='transition ease-in duration-100'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                >
                                    <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                        {type.map((item) => (
                                            <Listbox.Option
                                                key={item.id}
                                                className="relative cursor-default select-none py-2 px-4 text-gray-900 hover:bg-[#43b1b1]"
                                                onClick={() => handleUpdateParams(item.name)}
                                                value={item.value}
                                            >

                                                <span className={`block truncate`} >
                                                    {item.name}
                                                </span>

                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>

                <div className='flex flex-col items-center sm:items-start'>

                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
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