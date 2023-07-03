import React from 'react'
import Project_card from './Project_card'

const Project = ({ theme }: { theme: string }) => {
    return (
        <>
        <div id='projects'> 
            <h1 className='text-center header-1 my-3'>Project</h1>

            <div className='flex flex-col items-center sm:items-start'>

                <div className='w-full flex-col'>
                    <Project_card
                        image_src="/project/computer.svg"
                        sourcecode="https://github.com/tinjet11/car_rental"
                        description="Official website of Computer Science Society of University of Nottingham Malaysia"
                        tag={["Next.JS", "Typescript", "Appwrite", "Tailwind CSS"]}
                        theme={theme}
                        livedemo='https://unm-css.vercel.app/'
                    />
                    <Project_card
                        image_src="/project/portfolio.svg"
                        sourcecode="https://github.com/tinjet11/portfolio"
                        description="My personal portfolio"
                        tag={["Next.JS", "Typescript", "Tailwind CSS"]}
                        theme={theme}
                        livedemo='https://tinjet.vercel.app/'
                    />
                    <Project_card
                        image_src="/project/car.svg"
                        sourcecode="https://github.com/tinjet11/car_rental"
                        description="A comprehensive car rental system that enables admin to effortlessly book, update, and cancel reservations. 
                        The system encompasses a range of intuitive dashboards, including pickup/return functionality, reservation management, 
                        customer insights, vehicle administration, staff management, and a centralized summary dashboard."
                        tag={["HTML", "CSS", "Javascript", "PHP"]}
                        theme={theme}
                    />

                </div>
            </div>
            </div>
        </>
    )
}

export default Project