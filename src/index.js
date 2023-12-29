/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main/App";
import { registerServiceWorker } from "./registerServiceWorker";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

registerServiceWorker();
reportWebVitals();
