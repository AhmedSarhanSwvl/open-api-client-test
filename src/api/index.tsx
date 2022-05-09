import * as React from 'react';
import OpenAPIClientAxios from 'openapi-client-axios';
import { Client } from './gen/client';
import definition from './gen/schema.json';

interface ApiContextState {
	client: Client | undefined;
}

const ApiContext = React.createContext<ApiContextState>({
	client: undefined,
});

interface ApiProviderProps {
	url: string;
	children?: React.ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ url, children }) => {
	const apiRef = React.useRef(
		new OpenAPIClientAxios({
			/* @ts-ignore */
			definition,
			withServer: { url },
		})
	);
	const clientRef = React.useRef(apiRef.current.initSync<Client>());

	return (
		<ApiContext.Provider value={{ client: clientRef.current }}>
			{children}
		</ApiContext.Provider>
	);
};

export const useApi = () => {
	const { client } = React.useContext(ApiContext);

	if (!client) {
		throw new Error('A client API must be defined');
	}

	return client;
};
