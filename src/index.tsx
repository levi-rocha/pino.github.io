import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./configureStore";
import "./index.css";

const store = configureStore();

const Modal = require("react-modal");
Modal.setAppElement("#root");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
registerServiceWorker();
