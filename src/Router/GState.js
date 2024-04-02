import { ApolloClient, InMemoryCache } from "@apollo/client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const GState = React.createContext(null);


// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {
	const [pageRoot, setPageRoot] = useState('/');
	const [loginYn, setLoginYn] = useState(localStorage.getItem('logginYn') === 'true' ? true : false);
	const client = new ApolloClient({
		uri : "https://tender-whippet-55.hasura.app/v1/graphql",
		headers: {
		  'x-hasura-admin-secret' : 'LEFC1vqCLe0R5JxbvkrqOEWwwAjls9967PVkeg62WKT3zgpMyJZO9MWECqpQDA2I'   
		},
		cache: new InMemoryCache(),
	  });

	const value = {
		pageRoot,
		setPageRoot,
		loginYn,
		setLoginYn,
		client,
	};

	
	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;