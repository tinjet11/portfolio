import React from 'react'

type Props = {
    title: string,
    contents: string[]
}

const Skills_card = ({ title, contents }: Props) => {
    return (
        <div className="rounded-lg shadow-lg p-6 mb-2 flex flex-col w-full justify-start">
            <h2 className="header-2">{title}</h2>
            <ul className="list-inside list-disc">
                {contents.map((content) => (
                    <li key={content}>{content}</li>
                ))}
            </ul>
        </div>
    )
}

export default Skills_card