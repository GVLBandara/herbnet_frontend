import React from 'react';
import './App.css';
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import {SearchResult} from "./Pages/SearchResult";

function App() {
	return (
		<>
			<AuthProvider>
				<Navbar/>
				<SearchResult/>
			</AuthProvider>
		</>
	);
}

export default App;
