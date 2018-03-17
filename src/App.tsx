import * as React from "react";
import { SidePanel } from "./components";
import { MainPanel, ProjectDetailModal } from "./containers";

class App extends React.Component {
	render() {
		return (
			<div>
				<ProjectDetailModal />
				<SidePanel />
				<MainPanel />
			</div>
		);
	}
}

export default App;
