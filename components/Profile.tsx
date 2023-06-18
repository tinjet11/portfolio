import Image from 'next/image'
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import { Icons } from './icons';

const Profile = () => {

    return (
        <div className='flex flex-col sm:flex-row justify-center m-3'>
            <div>
                <Image
                    src={"/me.jpg"}
                    alt={'placeholder'}
                    width={200}
                    height={200}
                    className='object-contain'
                />
            </div>

            <div className='flex flex-col m-2 p-2 align-baseline'>
                <div className='relative z-40 '>
                    <strong><span className='text-[#778ba5] text-[48px]'>Leong Tin Jet</span></strong>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(200)
                                .typeString("<span style='font-size:28px;'>Full Stack Web Developer</span>")
                                .start();
                        }}
                    />
                </div>

                <div className='flex flex-row justify-end mt-auto p-2 gap-2'>
                    <div className='flex flex-row items-center gap-1'>
                        <Icons.gitHub className="h-6 w-6"/>
                        <Link target="_blank" href="https://github.com/tinjet11">Github</Link>

                    </div>
                    <div className='flex flex-row  items-center gap-1'>
                        <Icons.linkedin />
                        <Link target="_blank" href="https://www.linkedin.com/in/tinjet">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile