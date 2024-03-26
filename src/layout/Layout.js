import React from 'react';
import PropTypes from 'prop-types';

import Header from 'layout/Header';
import Gnb from 'layout/Gnb';
import Footer from 'layout/Footer';

const Layout = ({loginYn, children}) => {

	return (
		<>
			<Header />
			
			{loginYn && <Gnb />}
			
			<div id="container">
				<div className="contents">
					{children}
				</div>
			</div>
			
			<Footer />
		</>
	);
}


Layout.propTypes = {
	loginYn : PropTypes.bool.isRequired,
	children : PropTypes.node.isRequired,
}
export default Layout;