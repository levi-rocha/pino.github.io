import * as React from 'react';
import './About.css';

const githubLogo = require ('../../resource/github.svg');
const linkedinLogo = require ('../../resource/linkedin.svg');

const About: React.SFC = () => (
    <div className="about-card">
        <h2>Levi Rocha</h2>
        <p>Developing software for a better world</p>
        <div className="links">
            <a href="https://github.com/pino"><img src={githubLogo} /></a>
            <a href="https://www.linkedin.com/in/levirocha"><img src={linkedinLogo}/></a>
        </div>
    </div>
);

export default About;