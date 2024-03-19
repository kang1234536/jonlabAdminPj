import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {GState} from 'Router/GState';
import Buttons from 'ui_component/buttons';

const Header = () => {
	const {loginYn, setLoginYn} = useContext(GState);

	const logoutClickFn = (e)=>{
		setLoginYn(false);
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