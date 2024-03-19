import React from 'react';
import PropTypes from 'prop-types';

import Header from 'layout/Header';
import Gnb from 'layout/Gnb';
import Footer from 'layout/Footer';

const Layout = ({loginYn, children}) => {
	
	return (
		<>
			{loginYn &&
				<>
					<Header />
					<Gnb />
					<div id="container">

						{children}

					</div>
					<Footer />
				</>
			}

			{!loginYn &&
				<>
					<Header />
					<div id="container">
						{children}
					</div>
					<Footer />
				</>
			}
		</>
	);
}


Layout.propTypes = {
	loginYn : PropTypes.bool.isRequired,
	children : PropTypes.node.isRequired,
}
export default Layout;