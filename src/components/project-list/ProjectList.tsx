import * as React from "react";
import { Project } from "../../types";
import ProjectCard from "../project-card/ProjectCard";
import "./ProjectList.css";

export interface ProjectListProps {
	projects: Project[];
	onToggleTag: () => void;
	projectClick: () => void;
}

const ProjectList: React.SFC<ProjectListProps> = props => (
	<div className="project-list">
		<h2>Projects</h2>
		{props.projects.map(project => (
			<ProjectCard
				key={project.id}
				project={project}
				projectClick={props.projectClick}
				onToggleTag={props.onToggleTag}
			/>
		))}
	</div>
);

export default ProjectList;
