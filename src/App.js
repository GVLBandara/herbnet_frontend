import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from "./Components/Login";
import {AuthProvider} from "./Components/AuthContext";

function App() {
	return (
		<>
			<AuthProvider>
				<Login/>
			</AuthProvider>
			{/*<Home/>*/}
		</>
	);
}

export default App;
