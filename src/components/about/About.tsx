import * as React from "react";
import { ProjectLink } from "../../components";
import "./About.css";

const githubLogo = require("../../resource/github.svg");
const linkedinLogo = require("../../resource/linkedin.svg");

const About: React.SFC = () => (
	<div className="about-card">
		<h2>Levi Rocha</h2>
		<p>Developing software for a better world.</p>
		<div className="links">
			<a href="https://github.com/pino" target="_blank">
				<img src={githubLogo} />
			</a>
			<a href="https://www.linkedin.com/in/levirocha" target="_blank">
				<img src={linkedinLogo} />
			</a>
		</div>
		<ProjectLink
			id={0}
			title="CV"
			url="https://drive.google.com/file/d/1DGvTBxD1ktvEdznTqFdK3xzIZEvmrfRr/view?usp=sharing"
		/>
	</div>
);

export default About;
