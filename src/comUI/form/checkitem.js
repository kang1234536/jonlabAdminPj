import React, {useId, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const CheckItem = ({chkClass="chkItem", text, checked=false, disabled=false, changeCall}) => {
	const checkID = useId();
	const inpEl = useRef();

	const changeFn = (e)=>{
		e.stopPropagation();
		var target = e.target;

		if(changeCall) changeCall(target.checked);
	}

	useEffect(()=>{
		inpEl.current.addEventListener('change', changeFn);

		return ()=>{
			if(inpEl.current !== null) inpEl.current.removeEventListener('change', changeFn);
		}
	});

	return(
		<span className={disabled ? chkClass + " disabled" : chkClass}>
			<input type="checkbox" id={checkID} defaultChecked={checked} disabled={disabled ? "disabled" : ""} ref={inpEl} />
			<label htmlFor={checkID}><span>{text}</span></label>
		</span>
	);
}

CheckItem.propTypes = {
	chkClass : PropTypes.string,
	text : PropTypes.string,
	changeCall : PropTypes.func,
	checked : PropTypes.bool,
	disabled : PropTypes.bool,
}

export default CheckItem;