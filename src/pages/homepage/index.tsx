import React from 'react'
import Header from './components/header/index'
import About from './components/about/index'
import { Me } from '../../../context/Me'
import Resume from './components/resume'
import Projects from './components/projects'

const Homepage: React.FC = () => {

    return (

        <>
        
            <Header
                social={Me.social}
            />

            <About />

            <Resume 
                education={Me.resume.education}
                employment={Me.resume.employment}
            />

            {/* <Projects /> */}

        </>

    )

}

export default Homepage