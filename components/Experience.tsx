import React from 'react'
import Experience_card from './Experience_card'

const Experience = () => {
  return (

    <div className="container mx-auto p-4" id='experience'>
      <h1 className="text-center font-bold text-4xl capitalize mb-3">Experience</h1>

      <Experience_card 
      organisation={'Computer Science Society | University of Nottingham Malaysia'} 
      position={'Head of Technology'} 
      date={'May 2023 – Present'} 
      description={[
        "Project leader of Society Website & Nott A Student App",
        "Host Workshop about CTF",
        "Assists in other events of the society"
    ]}  
      />

   {/*  <hr/>
      <Experience_card 
      organisation={'Computer Science Society | University of Nottingham Malaysia'} 
      position={'Head of Technology'} 
      date={'May 2023 – Present'} 
      description={[
        "Project leader of Society Website & Nott A Student App",
        "Host Workshop about CTF",
        "Assists in other events of the society"
    ]}  
      /> */}

   
    </div>

  )
}

export default Experience