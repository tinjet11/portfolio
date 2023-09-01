import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

type Props = {
    title: string,
    contents: string[]
}

const Skills_card = ({ title, contents }: Props) => {
    return (
        <div className="rounded-lg p-6 mb-4 flex flex-col w-full">
       {/*      <h2 className="text-2xl font-semibold mb-2">{title}</h2> */}
            <Marquee speed={40}>
                {contents.map((content, index) => (
                    <Image 
                    key={index}
                    src={content}
                    width={200}
                    height={200}
                    className='mx-1'
                    alt='Programing language logo'
                    />
                ))}

            </Marquee>

        </div>

    )
}

export default Skills_card