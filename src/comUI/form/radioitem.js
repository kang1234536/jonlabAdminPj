import React, {useId, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const RadioItem = ({rdoClass='rdoItem', text, group, checked=false, disabled=false, changeCall}) => {
	const radioID = useId();
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
		<span className={disabled ? rdoClass + " disabled" : rdoClass}>
			<input type="radio" id={radioID} defaultChecked={checked} name={group} disabled={disabled ? "disabled" : ""} ref={inpEl} />
			<label htmlFor={radioID}><span>{text}</span></label>
		</span>
	);
}

RadioItem.propTypes = {
	rdoClass : PropTypes.string,
	text : PropTypes.string,
	group : PropTypes.string.isRequired,
	changeCall : PropTypes.func,
	checked : PropTypes.bool,
	disabled : PropTypes.bool,
}

export default RadioItem;