import * as React from "react";
import { About } from "../../components";
import { ProjectsFilter } from "../../containers";
import "./SidePanel.css";

const SidePanel: React.SFC = () => (
	<div className="side-panel">
		<About />
		<ProjectsFilter />
	</div>
);

export default SidePanel;
