import React from 'react';
import './App.css';
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import {SearchResult} from "./Pages/SearchResult";
import Home from "./Pages/Home";

function App() {
	return (
		<>
			<AuthProvider>
				<Navbar/>
				<Home/>
			</AuthProvider>
		</>
	);
}

export default App;
