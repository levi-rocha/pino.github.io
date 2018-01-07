import * as React from 'react';
import { Project } from '../../types';

export interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail: React.SFC<ProjectDetailProps> = (props) => (
    <div>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
    </div>
);

export default ProjectDetail;