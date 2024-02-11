import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {AuthProvider} from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import {SearchResult} from "./Pages/SearchResult";
import Home from "./Pages/Home";
import {API} from "./API/API";

function App() {
	const [searchKey, setSearchKey] = useState({
		key: '',
		part: '',
		state: ''
	})
	const [key, setKey] = useState("")
	const [prodList, setProdList] = useState([])

	const handleChange = (event) => {
		const {name, value} = event.target;
		setSearchKey({...searchKey, [name]: value});
	};

	const search = async (e) => {
		if (searchKey.key || searchKey.part || searchKey.state) {
			try {
				setKey(searchKey.key);
				const response = await API.search(searchKey);
				setProdList(response.data)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<>
			<AuthProvider>
				<Router>
					<Navbar handleChange={handleChange} handleSearch={search} searchKey={searchKey}/>
					<Routes>
						<Route path='/' element={<Home handleChange={handleChange} searchKey={searchKey} search={search} />} />
						<Route path='/search' element={<SearchResult prodList={prodList} searchKey={key} />} />
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
