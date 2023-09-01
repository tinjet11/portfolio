import Image from 'next/image'
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import { Icons } from './icons';

const Profile = () => {

    return (
        <div className='flex flex-col md:flex-row m-2 p-2 justify-center'>

<div className='flex justify-center md:basis-1/3 max-h-[350px]'>
    <Image
        src="/profile.jpg"
        height={300}
        width={300}
        alt="my photo"
        className='object-fill self-center'
        loading="eager" // Add this line to prioritize loading
    />
</div>


            <div className='flex flex-col md:basis-2/3 p-4 justify-center   '>
                <h1 className='text-2xl font-bold'>A Little Bit About Me</h1>
                <p className='mt-4 text-lg'>
                    Hello👋 My name is Leong Tin Jet. I am a second-year student studying Computer Science with a focus on
                    Artificial Intelligence at the University of Nottingham Malaysia. I am passionate about software
                    development and strive to stay updated with the latest technology. I am both task-oriented and
                    self-driven. I find a sense of fulfillment in achieving goals and constructing projects.
                    My interest also extends to AI, and I am eager to delve deeper into the subject during my second-year
                    journey. Currently, I am seeking an internship as a software developer or mobile application developer
                    for the summer of 2024.
                </p>
                <div className='flex flex-row justify-end mt-8 p-2 gap-2'>
                    <div className='flex flex-row items-center gap-1'>
                        <Icons.gitHub className="h-6 w-6" />
                        <Link target="_blank" href="https://github.com/tinjet11" className='hover:underline'>Github</Link>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <Icons.linkedin className="h-6 w-6" />
                        <Link target="_blank" href="https://www.linkedin.com/in/tinjet" className=' hover:underline'>LinkedIn</Link>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Profile