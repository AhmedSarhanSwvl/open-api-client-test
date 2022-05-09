import React, { useEffect, useState } from 'react';

import { useApi } from './api';
import { useQuery } from 'react-query';

import logo from './logo.svg';
import './App.css';
function App() {
	// calling the useApi hook created from the api context;
	const api = useApi();

	const [betIdState, updateBetIdState] = useState<number>(1);

	// the fetch function using the generated types and schema from api context
	const fetchBetById = async (betId: number) => {
		return await api.getPetById(betId);
	};

	// passing the fetch function to useQuery hook to fetch through react query
	// this will always give 404 due to the fact this example doesn't have a BE url
	const { data, isFetching, isError } = useQuery(
		['fetchSingleBet', betIdState],
		() => fetchBetById(betIdState)
	);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
