import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const GState = React.createContext(null);

// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {

	const [pageRoot, setPageRoot] = useState('/');

	const value = {
		pageRoot,
		setPageRoot,
	};

	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;
