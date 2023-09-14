import React from 'react'
import Experience_card from './Experience_card'
import { experience } from './constant'


const Experience = () => {
  return (

    <div className="flex-col my-8 p-2" id='experience'>
      <h1 className="text-left font-bold text-4xl capitalize mb-4">Experience</h1>

{experience.map((item,index)=>(
  <Experience_card
        key= {index}
        organisation={item.organisation}
        position={item.position}
        date={item.date}
        description={item.description}
      />
))}
      
    </div>

  )
}

export default Experience