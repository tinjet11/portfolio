import React from 'react'
import Skills_card from './Skills_card'
import { skill_content, skill_content_text } from './constant'


const Skills = () => {
    return (
        <div className='mt-4 p-2'>
            <h1 className="text-left header-1 mb-3">Skills</h1>
            <div className="flex flex-row flex-wrap mt-3">
                {skill_content_text.map((tag, index) => (
                    <div className="tag border-[#183f2c] py-1 px-2 rounded-full mr-2 mb-2" key={index}>
                        {tag}
                    </div>
                ))}
            </div>
            <div className='flex-col mb-2 pb-3'>
                {
                    skill_content.map((item, index) => (
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

