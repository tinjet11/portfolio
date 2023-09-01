import React from 'react'
import Skills_card from './Skills_card'
import { skill_content } from './constant'


const Skills = () => {
    return (
        <div className='mt-4 p-2'>
            <h1 className="text-left header-1 mb-3">Skills</h1>
            <div className='flex-col mb-2 pb-3'>
                {
                    skill_content.map((item,index) => (
                        <Skills_card
                        key={index}
                            title={item.title}
                            contents={item.contents}
                        />
                    ))
                }
            </div>
        </div>


    )
}

export default Skills

