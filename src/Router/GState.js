import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GState = React.createContext(null);

export const userLoginFn = ({success})=>{
	success();
}
export const userLogoutFn = ({success})=>{
	success();
}

// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {
	const [pageRoot, setPageRoot] = useState('/');
	const [loginYn, setLoginYn] = useState(localStorage.getItem('logginYn') === 'true' ? true : false);

	const value = {
		pageRoot,
		setPageRoot,
		loginYn,
		setLoginYn,
	};

	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;