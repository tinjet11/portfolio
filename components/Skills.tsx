import React from 'react'

const Skills = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center font-bold text-4xl capitalize mb-3">Skills</h1>
            <div className='flex flex-col sm:flex-row justify-between mb-2 pb-5'>
                <div>
                    <h2 className="font-bold text-xl text-[#778ba5]">Programming Languages</h2>
                    <ul className="mx-auto list-inside list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>PHP</li>
                        <li>SQL</li>
                        <li>Java</li>
                        <li>C</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h2 className="font-bold text-xl text-[#778ba5]">Frontend Frameworks</h2>
                        <ul className="mx-auto list-inside list-disc">
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-[#778ba5]">Backend Frameworks</h2>
                        <ul className="mx-auto list-inside list-disc">
                            <li>To be learn...</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <h2 className="font-bold text-xl text-[#778ba5] ">Mobile App Development</h2>
                    <ul className="mx-auto list-inside list-disc">
                        <li>Dart</li>
                        <li>Flutter</li>
                    </ul>
                </div>

            </div>
            <div className="overflow-x-auto">
            <table className='w-full'>
                <thead>
                    <tr>
                        <th rowSpan={2}>Language</th>
                        <th colSpan={3} >Proficiency</th>
                    </tr>
                    <tr>
                        <th>Speaking</th>
                        <th>Writing</th>
                        <th>Listening</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>English</td>
                        <td>Fluent</td>
                        <td>Fluent</td>
                        <td>Fluent</td>
                    </tr>
                    <tr>
                        <td>Chinese</td>
                        <td>Native</td>
                        <td>Native</td>
                        <td>Native</td>
                    </tr>
                    <tr>
                        <td>Bahasa Melayu</td>
                        <td>Intermediate</td>
                        <td>Proficient</td>
                        <td>Proficient</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

    )
}

export default Skills