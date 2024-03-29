import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'Router/App';
import { ApolloProvider } from '@apollo/client';
import apolloClient from "./apollo";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</React.StrictMode>  
);

