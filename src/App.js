import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from "./Components/Login";
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import {SignUp} from "./Components/SignUp";
import {SellProduct} from "./Pages/SellProduct";

function App() {
	return (
		<>
			<AuthProvider>
				<Navbar/>
				<SellProduct/>
				{/*<Home/>*/}
			</AuthProvider>
		</>
	);
}

export default App;
