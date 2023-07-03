import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './icons'

export interface projectCardProps {
    image_src: string,
    sourcecode: string,
    description: string,
    tag: string[],
    theme: string,
    livedemo?: string
}

const Project_card = ({ image_src, sourcecode, livedemo, description, tag, theme }: projectCardProps) => {

    return (

        <div className='flex flex-col w-auto rounded-xl shadow-lg p-6 mb-3 '>
            <div className='flex flex-col m-2 p-2'>

                <div className='flex flex-col sm:flex-row p-2'>
                    <Image
                        src={image_src}
                        alt={'placeholder'}
                        width={300}
                        height={200}
                        className='object-contain m-2'
                    />

                    <div className='flex-col justify-evenly ml-4'>

                        {/*  project description */}
                        <div>
                            <h1 className='header-2'>Project Description</h1>
                            <p>
                                {description}
                            </p>
                        </div>

                        {/*  project action */}
                        <div className='flex flex-row mt-3 gap-3 p-2 justify-start'>
                            <div className='flex flex-row gap-2'>
                                <Icons.gitHub className='h-6 w-6' />
                                <a target="_blank" href={sourcecode} className='font-semibold'>
                                    SourceCode</a>
                            </div>
                            {livedemo &&
                                <div className='flex flex-row gap-2'>
                                    <Icons.livedemo className='h-6 w-6' />
                                    <a target="_blank" href={livedemo}>
                                        LiveDemo</a>
                                </div>
                            }
                        </div>

                        {/*  Tag */}
                        <div className='flex flex-row flex-wrap mt-3'>
                            {
                                tag.map((tag: string, index: number) => (

                                    <div className='tag border-gold' key={index}>
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Project_card