import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto p-4">
                <p>&copy; 2023 Developed By Leong Tin Jet. All rights reserved.</p>

                <div className='flex flex-row justify-end mt-auto p-2 gap-2'>
                    <div className='flex flex-row items-center gap-1'>
                        <Icons.gitHub className='h-6 w-6' />
                        <Link target="_blank" href="https://github.com/tinjet11">Github</Link>

                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <Icons.linkedin />
                        <Link target="_blank" href="https://www.linkedin.com/in/tinjet">LinkedIn</Link>
                    </div>

                    <div className='flex flex-row items-center'>
                        <Image
                            width={40}
                            height={40}
                            alt="instagram logo"
                            src={"/instagram.svg"}
                            className='object-contain'
                        />
                        <Link target="_blank" href="https://www.instagram.com/tinjet_11/">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer