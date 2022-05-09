import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApiProvider } from './api';
import { QueryClient, QueryClientProvider } from 'react-query';
const REACT_APP_API_URL = 'api url here';

const client = new QueryClient();
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ApiProvider url={process.env.REACT_APP_API_URL! || REACT_APP_API_URL}>
				<App />
			</ApiProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
