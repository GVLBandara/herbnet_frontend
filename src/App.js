import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from "./Components/Login";
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import {SignUp} from "./Components/SignUp";

function App() {
	return (
		<>
			{/*<SignUp/>*/}
			<AuthProvider>
				<Navbar/>
			</AuthProvider>
			{/*<Home/>*/}
		</>
	);
}

export default App;
