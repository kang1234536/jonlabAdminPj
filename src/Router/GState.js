// import { ApolloClient, InMemoryCache } from "@apollo/client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
export const GState = React.createContext(null);

// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {
	const [pageRoot, setPageRoot] = useState('/');
	const [loginYn, setLoginYn] = useState(localStorage.getItem('logginYn') === 'true' ? true : false);
	

	// axios post 사용법

	// axios.post("/api",
	// 		{ test:'1'}, 
	// 		 {header: {
	// 					// "Context-Type": "multipart/form-data",
	// 				},
	// 		}).then((res) => {
	// 							// 성공했을 경우    
	// 							console.log("성공", res);
	// 						}
	// 				).catch((res) => {
	// 					// 실패했을 경우
	// 					console.error("실패 ", res);
	// 					}
	// 				);

	// grapql 어디에서든 사용가능하게 설계
	// const client = new ApolloClient({
	// 	uri : "https://tender-whippet-55.hasura.app/v1/graphql",
	// 	headers: {
	// 	  'x-hasura-admin-secret' : 'LEFC1vqCLe0R5JxbvkrqOEWwwAjls9967PVkeg62WKT3zgpMyJZO9MWECqpQDA2I'   
	// 	},
	// 	cache: new InMemoryCache(),
	//   });
	
	//jwt 변수선언
	
	const value = {
		pageRoot,
		setPageRoot,
		loginYn,
		setLoginYn,
		axios,
		// client,
	};

	
	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;