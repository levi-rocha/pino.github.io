import * as React from 'react';
import { Project } from '../../types';
import { ProjectImage, ProjectLink } from '../../components';
import './ProjectDetail.css';

export interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail: React.SFC<ProjectDetailProps> = (props) => (
        <div className="project-detail">
            <h1>{props.project.title}</h1>
            <p>{props.project.description}</p>
            <div>
            {props.project.links.map(link =>
                <ProjectLink key={link.id} {...link} />
            )}
            </div>
            {props.project.images.map(image =>
                <ProjectImage key={image} imageSrc={image}/>
            )}
        </div>
    );

export default ProjectDetail;