import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectCardProps } from '@/types'

const Project_card = ({ image_src, sourcecode, description, tag }: projectCardProps) => {
    return (

        <div className='flex flex-col w-auto'>
            <div className='flex flex-col m-2 p-2'>

                <Image
                    src={image_src}
                    alt={'placeholder'}
                    width={300}
                    height={200}
                    className='object-contain'
                />

                <div className='flex flex-row mt-3 gap-3 p-2'>
                    <Image
                        width={25}
                        height={25}
                        alt="github logo white"
                        src={"/github-white.svg"}
                        className='object-contain'
                    />
                    <Link href={sourcecode} target='_blank'>
                        Soucecode</Link>
                </div>


                {/*  project description */}

                <h1 className='font-bold text-lg'>Project Description</h1>
                <p>
                    {description}
                </p>



                {/*  Tag */}
                <div className='flex flex-row flex-wrap mt-3'>
                    {
                        tag.map((tag: string, index: number) => (
                            <div className='tag' key={index}>
                                {tag}
                            </div>
                        ))
                    };
                </div>

            </div>

        </div>

    )
}

export default Project_card