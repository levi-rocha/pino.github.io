import * as React from 'react';
import { Project } from '../../types';
import ProjectList from '../project-list/ProjectList';
import './MainPanel.css';

export interface MainPanelProps {
    projects: Project[];
}

const MainPanel: React.SFC<MainPanelProps> = (props) => (
    <div className="main-panel">
        <ProjectList
            projects={props.projects}
        />
    </div>
);

export default MainPanel;