import * as React from "react";
import { Project } from "../../types";
import ProjectList from "../project-list/ProjectList";
import "./MainPanel.css";

export interface MainPanelProps {
	projects: Project[];
	onToggleTag: () => any;
	projectClick: () => any;
}

const MainPanel: React.SFC<MainPanelProps> = props => {
	return (
		<div className="main-panel">
			<ProjectList
				projects={props.projects}
				projectClick={props.projectClick}
				onToggleTag={props.onToggleTag}
			/>
		</div>
	);
};

export default MainPanel;
