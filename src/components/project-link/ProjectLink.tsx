import * as React from "react";
import "./ProjectLink.css";

export interface ProjectLinkProps {
	id: number;
	title: string;
	url: string;
}

const ProjectLink: React.SFC<ProjectLinkProps> = props => (
	<div className="project-link">
		<a href={props.url} target="_blank">
			{props.title}
		</a>
	</div>
);

export default ProjectLink;
