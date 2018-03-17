import * as React from "react";
import { Project } from "../../types";
import { SmallTagList, ProjectImage, ProjectLink } from "../../components";
import "./ProjectDetail.css";

const Modal = require("react-modal");

export interface ProjectDetailProps {
	project: Project;
	imageIsOpen: boolean;
	openImageSrc: string;
	openImage: () => void;
	closeImage: () => void;
}

const ProjectDetail: React.SFC<ProjectDetailProps> = props => (
	<div className="project-detail">
		<h1>{props.project.title}</h1>
		<p>{props.project.description}</p>
		<SmallTagList tags={props.project.tags} />
		<div>
			{props.project.links.map(link => <ProjectLink key={link.id} {...link} />)}
		</div>
		{props.project.images.map(image => (
			<ProjectImage
				key={image}
				imageSrc={image}
				onOpen={props.openImage}
				{...props}
			/>
		))}
		<Modal
			id="projectImage"
			contentLabel="project image"
			isOpen={props.imageIsOpen}
			onRequestClose={() => props.closeImage()}
		>
			<img
				src={require("../../resource/" + props.openImageSrc)}
				alt="screenshot"
			/>
			<button className="close-button" onClick={event => props.closeImage()}>
				Close
			</button>
		</Modal>
	</div>
);

export default ProjectDetail;
