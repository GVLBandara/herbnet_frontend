import React, {useState} from 'react';
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
	const [visible, setVisible] = useState(true)
	const [prodList, setProdList] = useState("")

	const handleChange = (event) => {
		const {name, value} = event.target;
		setSearchKey({...searchKey, [name]: value});
	};

	const handleSearch = async (e) => {
		if (searchKey.key || searchKey.part || searchKey.state) {
			try {
				const response = await API.getUsers(searchKey);
				setProdList(response.data)
				setKey(searchKey.key);
				setVisible(false)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<>
			<AuthProvider>
				<Navbar handleChange={handleChange} handleSearch={handleSearch} searchKey={searchKey}/>
				{visible?
					<Home handleChange={handleChange} handleSearch={handleSearch}/> :
					<SearchResult prodList={prodList} searchKey={key}/>}
			</AuthProvider>
		</>
	);
}

export default App;
