import { experienceCardProps } from '@/types'
import React from 'react'

const Experience_card = ({ organisation, position, date, description }: experienceCardProps) => {
    return (
        <div className='mt-3 '>
            {/*organisation */}
            <div className="font-bold text-lg mb-1">
                {organisation}
            </div>

            {/*position */}
            <div className="font-bold text-xl mb-1 text-[#98a498]">
                {position}
            </div>

            {/*date */}
            <div className="text-lg mb-2">
                {date}
            </div>

            {/*description */}
            <div className="mb-4">
                <ul className="list-disc list-inside">
                    {description.map((desc,index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience_card