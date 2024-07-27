import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
	return (
		<div className="flex min-h-screen w-full">
			<Sidebar />
			<Main />
		</div>
	);
}

export default App;
