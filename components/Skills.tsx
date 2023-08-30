import React from 'react'
import Skills_card from './Skills_card'


/* https://devicon.dev/ */
const skill_content = [
    {
        title: "Programming Languages",
        contents: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg",
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        ]
    },
    /*   {
          title: "Web Develoment",
          contents: [
              'NextJs',
              'React',
              'HTML',
              'CSS',
              'Tailwind CSS',
          ],
      },
      {
          title: "Mobile App Development",
          contents: ["Flutter","Dart","Flutter Clean Architeture","Bloc"]
      } */
]
const Skills = () => {
    return (
        <>
            <h1 className="text-left header-1 mb-3">Skills</h1>
            <div className='flex-col mb-2 pb-5'>
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
        </>


    )
}

export default Skills

