import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div className='mt-4 p-2'>
            <h1 className="text-left header-1 mb-3">Let's connect</h1>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                    <span className="mr-2 font-semibold text-lg">Email:</span>
                    <Link href="mailto:tinjet1016@gmail.com" className=" text-[#43b1b1] underline">tinjet1016@gmail.com</Link>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 font-semibold text-lg">GitHub:</span>
                    <Link href="https://github.com/tinjet11" className=" text-[#43b1b1] underline">https://github.com/tinjet11</Link>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 font-semibold text-lg">LinkedIn:</span>
                    <Link href="https://www.linkedin.com/in/tinjet" className=" text-[#43b1b1] underline">https://www.linkedin.com/in/tinjet</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact