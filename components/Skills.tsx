import Link from 'next/link'
import React from 'react'
import Skills_card from './Skills_card'

const Skills = () => {
    return (
        <div className="container mx-auto p-4" id='skills'>
            <h1 className="text-center header-1 mb-3">Skills</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 pb-5'>

                <Skills_card
                    title={'Programming Languages'}
                    contents={[
                        'Javascript',
                        'Typescript',
                        'PHP',
                        'SQL',
                        'Java',
                        'C',
                    ]}
                />



                <Skills_card
                    title={'Frontend'}
                    contents={[
                        'Next.js',
                        'React',
                        'HTML',
                        'CSS',
                        'Tailwind CSS',
                        // Add more frontend frameworks or libraries here
                    ]}
                />



                <Skills_card
                    title={'Backend'}
                    contents={['To be learned...']}
                />



                <Skills_card
                    title={'Mobile App Development'}
                    contents={['Dart', 'Flutter']}
                />

            </div>
        </div>

    )
}

export default Skills