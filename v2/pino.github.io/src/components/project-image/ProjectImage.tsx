import * as React from 'react';
import './ProjectImage.css';

export interface ProjectImageProps {
    imageSrc: string;
}

const ProjectImage: React.SFC<ProjectImageProps> = (props) => (
    <div className="project-image">
         <img src={require('../../resource/' + props.imageSrc)} alt="screenshot"/>
    </div>
);

export default ProjectImage;