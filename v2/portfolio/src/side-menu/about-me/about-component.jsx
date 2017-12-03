import React from 'react'
import PropTypes from 'prop-types'
import github from './github.svg';
import linkedin from './linkedin.svg';
import './about-style.css'

const About = () => (
    <div className="about-card">
        <h2>Levi Rocha</h2>
        <div className="links">
            <a href="https://github.com/pino"><img src={github} /></a>
            <a href="https://www.linkedin.com/in/levirocha"><img src={linkedin}/></a>
        </div>
        <p>Developing software for a better world</p>
    </div>
)

export default About