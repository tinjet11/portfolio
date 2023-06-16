import React from 'react'
import Project_card from './Project_card'

const Project = ({ theme }: {theme:string}) => {
    return (
        <>
        <h1 className='text-center font-bold text-4xl capitalize mb-3'>Project</h1>
            <div className='flex flex-col items-center sm:items-start'>
                
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 flex-row'>
                    <Project_card
                        image_src="/images.jpg"
                        sourcecode="https://github.com/tinjet11/car_rental"
                        description="Official website of Computer Science Society of University of Nottingham Malaysia"
                        tag={["Next.JS", "Typescript", "Appwrite", "Tailwind CSS"]}
                        theme= {theme}
                    />
                      <Project_card
                        image_src="/images.jpg"
                        sourcecode="https://github.com/tinjet11/car_rental"
                        description=" A Car Rental System for admin usage"
                        tag={["HTML", "CSS", "Javascript", "PHP"]}
                        theme= {theme}
                    />
                      <Project_card
                        image_src="/images.jpg"
                        sourcecode="https://github.com/tinjet11/car_rental"
                        description=" A Car Rental System for admin usage"
                        tag={["HTML", "CSS", "Javascript", "PHP"]}
                        theme= {theme}
                    />

                </div>
            </div>
        </>
    )
}

export default Project