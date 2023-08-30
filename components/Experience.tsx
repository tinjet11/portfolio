import React from 'react'
import Experience_card from './Experience_card'

const Experience = () => {
  return (

    <div className="p-4" id='experience'>
      <h1 className="text-left font-bold text-4xl capitalize mb-3">Experience</h1>

      <Experience_card 
      key={1}
      organisation={'Computer Science Society | University of Nottingham Malaysia'} 
      position={'Head of Technology'} 
      date={'May 2023 – Present'} 
      description={[
        "Project leader of Society Website & Nott A Student App",
        "Host Workshop about CTF",
        "Assists in other events of the society"
    ]}  
      />
    </div>

  )
}

export default Experience