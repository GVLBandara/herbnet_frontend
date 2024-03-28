import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './Components/AuthContext';
import Navbar from './Components/Navbar';
import { SearchResult } from './Pages/SearchResult';
import Home from './Pages/Home';
import { ViewProduct } from './Pages/ViewProduct';
import { ListProduct } from './Pages/ListProduct';
import { MyProducts } from './Pages/MyProducts';
import MessageBox from './Components/MessageBox';

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/search/:key/:part/:state"
							element={<SearchResult />}
						/>
						<Route path="/view/:productId" element={<ViewProduct />} />
						<Route path="/sell/:plantName" element={<ListProduct />} />
						<Route path="/sell" element={<ListProduct />} />
						<Route path="/edit/:productId" element={<ListProduct />} />
						<Route path="/myproducts" element={<MyProducts />} />
						<Route path="/chat" element={<MessageBox />} />
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
