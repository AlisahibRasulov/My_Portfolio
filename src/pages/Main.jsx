import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Main = () => {
  
  return (
    <div>
      <div className="pages" id='home' >{<Home/>}</div>
      <div className="pages h-[60rem] flex justify-center all-bg" id='about'>{<About/>}</div>
      <div className="pages  flex justify-center all-bg w-full" id='skills' >{<Skills/>}</div>
      <div className="pages flex justify-center all-bg" id='projects' >{<Projects/>}</div>
      <div className="pages flex justify-center all-bg" id='contact' >{<Contact/>}</div>
    </div>
  )
}

export default Main
