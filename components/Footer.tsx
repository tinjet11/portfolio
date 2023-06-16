import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = ({ theme }: {theme:string}) => {
  return (
    <footer>
       <div className="container mx-auto p-4">
       <p>&copy; 2023 Developed By Leong Tin Jet. All rights reserved.</p>

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
                        <Link target="_blank" href="https://github.com/tinjet11">Github</Link>

                    </div>
                    <div className='flex flex-row  items-center'>
                        <Image
                            width={25}
                            height={25}
                            alt="linkedin logo"
                            src={"/linkedin.svg"}
                            className='object-contain pr-2'
                        />
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