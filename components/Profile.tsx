"use client";

import Image from 'next/image'
import Link from 'next/link';
import Typewriter from "typewriter-effect";

const Profile = ({ theme }: {theme:string}) => {

    return (
        <div className='flex flex-row justify-center m-3'>
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
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(" <strong><span style='color:#778ba5;font-size:48px'>Leong Tin Jet</span></strong><br>")
                                .pauseFor(1000)
                                .typeString("<span style='font-size:28px;'>Full Stack Web Developer</span>")
                                .start();
                        }}
                    />
                </div>

                <div className='flex flex-row justify-end mt-auto p-2 gap-2'>
                    <div className='flex flex-row items-center p-2'>
                        {
                            theme === "light" ?
                                <Image
                                    width={25}
                                    height={25}
                                    alt="github logo white"
                                    src={"/github-black.svg"}
                                    className='object-contain pr-2'
                                />
                                : <Image
                                    width={25}
                                    height={25}
                                    alt="github logo white"
                                    src={"/github-white.svg"}
                                    className='object-contain pr-2'
                                />
                                }
                        <Link href="https://github.com/tinjet11">Github</Link>

                    </div>
                    <div className='flex flex-row  items-center'>
                        <Image
                            width={25}
                            height={25}
                            alt="linkedin logo"
                            src={"/linkedin.svg"}
                            className='object-contain pr-2'
                        />
                        <Link href="https://github.com/tinjet11">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile