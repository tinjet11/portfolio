import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './icons'

export interface projectCardProps {

    title: string,
    sourcecode: string,
    livedemo?: string,
    feature?: string[],
    tag: string[],
    cover: string,

}

const Project_card = ({ sourcecode, livedemo, title, tag, feature, cover }: projectCardProps) => {

    return (
        <div className="flex flex-col min-w-[300px] max-w-[500px] rounded-xl p-6 mb-3">
            <div className="flex flex-col m-2 p-2">
                <div className="flex flex-col sm:flex-row p-2">
                    <div className="flex-col justify-evenly ml-4">
                        <Image
                            src={cover}
                            width={200}
                            height={200}
                            alt='Cover img'
                        />
                        <p className="text-lg font-semibold text-[#43b1b1]">{title}</p>
                        <div className="flex flex-row mt-3 gap-3 py-2 justify-start">
                            <div className="flex flex-row gap-2">
                                <Icons.gitHub className="h-6 w-6" />
                                <Link target="_blank" rel="noopener noreferrer" href={sourcecode} className="font-semibold">
                                    Source Code
                                </Link>
                            </div>
                            {livedemo && (
                                <div className="flex flex-row gap-2">
                                    <Icons.livedemo className="h-6 w-6" />
                                    <Link target="_blank" rel="noopener noreferrer" href={livedemo}>
                                        Live Demo
                                    </Link>
                                </div>
                            )}
                        </div>
                        {feature != undefined && (
                            <div className="mt-3">
                                <h1 className="text-xl font-semibold">Key Features</h1>
                                <ul className="list-inside list-disc mt-2">
                                    {feature?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                        }
                        <div className="flex flex-row flex-wrap mt-3">
                            {tag.map((tag, index) => (
                                <div className="tag border-[#183f2c] py-1 px-2 rounded-full mr-2 mb-2" key={index}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project_card