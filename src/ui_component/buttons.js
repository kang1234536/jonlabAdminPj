import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Buttons = ({name, btnType, txt, clickCall, blind, children}) => {
	const btnClick = (e)=>{
		if(clickCall) {
			e.stopPropagation();
			clickCall(e);
		}
	}


	if(children !== undefined) {
		return <button type={btnType} className={name} onClick={btnClick}>{children}</button>
	}

	return <button type={btnType} className={name} onClick={btnClick}><span className={blind && 'blind'}>{txt}</span></button>
}

Buttons.propTypes = {
	name : PropTypes.string.isRequired,
	btnType : PropTypes.string.isRequired,
	txt : PropTypes.string,
	clickCall : PropTypes.func,
	blind : PropTypes.bool,
	children : PropTypes.node
}

export default Buttons;