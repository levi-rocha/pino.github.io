import * as React from 'react';
import './ProjectImage.css';

export interface ProjectImageProps {
    imageSrc: string;
    onOpen: (image: string) => void;
}

const ProjectImage: React.SFC<ProjectImageProps> = (props) => (
    <div className="project-image" onClick={() => props.onOpen(props.imageSrc)}>
        <img src={require('../../resource/' + props.imageSrc)} alt="screenshot"/>
    </div>
);

export default ProjectImage;