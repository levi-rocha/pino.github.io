import * as React from 'react';
import { Project } from '../../types';
import { SmallTagList } from '../../components';
import './ProjectCard.css';

export interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.SFC<ProjectCardProps> = (props) => {
    
    let image = props.project.images.length > 0 
        ? <img src={require('../../resource/' + props.project.images[0])} alt="screenshot"/>
        : null;
    
    return (
        <div className="project-card">
            <div className="image-port">{image}</div> 
            <p>{props.project.title}</p>
            <SmallTagList tags={props.project.tags}/>
        </div>
    ); 
};

export default ProjectCard;