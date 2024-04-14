import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {GState, userLogoutFn} from 'Router/GState';
import Buttons from 'ui_component/buttons';

const Header = () => {
	const {loginYn, setLoginYn} = useContext(GState);

	const logoutClickFn = (e)=>{
		setLoginYn(false);
		localStorage.setItem('logginYn', 'false');
		localStorage.removeItem('loginToken');
	}

	return (
		<header id="header">
			<div className="headerInner">
				<h1 className="logo"><Link to="/*"><em>WHY NOT</em></Link></h1>

				{
					loginYn && 
					<div className="headerUtil">
						<Buttons name="btnTiny" txt="LOGOUT" clickCall={logoutClickFn} />
					</div>
				}
			</div>
		</header>
	);
}

export default Header;