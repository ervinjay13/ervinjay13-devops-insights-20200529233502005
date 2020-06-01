import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader";
import AppContainer from "./containers/AppContainer";
import "./App.css";
import GoogleMapContainer from "./components/GoogleMapContainer";

function App() {
	return (
		<div className="App">
			<AppHeader />
			<AppContainer />
			<GoogleMapContainer />
		</div>
	);
}

export default App;
