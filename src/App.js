import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from "./Components/Login";
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
			<AuthProvider>
				<Navbar/>
			</AuthProvider>
			{/*<Home/>*/}
		</>
	);
}

export default App;
