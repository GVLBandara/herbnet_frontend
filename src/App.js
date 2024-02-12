import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import {SearchResult} from "./Pages/SearchResult";
import Home from "./Pages/Home";
import {API} from "./API/API";
import {ViewProduct} from "./Pages/ViewProduct";

function App() {

	return (
		<>
			<AuthProvider>
				<Router>
					<Navbar/>
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/search/:key/:part/:state' element={<SearchResult/>} />
						<Route path='/view/:productId' element={<ViewProduct />} />
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
