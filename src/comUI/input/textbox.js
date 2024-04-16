import React, {useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';

const InputTxt = forwardRef(({inpClass="inpItem", inpType, inpTitle, disabled, readonly, maxLeng=9999, changeCall, val, placeholder}, ref) => {
	const inpEl = useRef();
	let classNm = inpClass;
	if(disabled) classNm = inpClass + ' disabled';
	if(readonly) classNm = inpClass + ' readonly';

	useImperativeHandle(ref, ()=>{
		return {
			setVal : (val)=>{
				inpEl.current.value = val;
			}
		}
	})

	const changeFn = (e)=>{
		e.stopPropagation();
		var target = e.target;

		if(changeCall) changeCall(target.value);
	}

	useEffect(()=>{
		inpEl.current.addEventListener('change', changeFn);

		return ()=>{
			if(inpEl.current !== null) inpEl.current.removeEventListener('change', changeFn);
		}
	});

	return (
		<span className={classNm}>
			<input type={inpType} value={val} title={inpTitle} disabled={disabled && 'disabled'} readOnly={readonly && 'readOnly'} maxLength={maxLeng} ref={inpEl} placeholder={placeholder} />
		</span>
	);
});

InputTxt.propTypes = {
	inpClass : PropTypes.string,
	inpType : PropTypes.string.isRequired,
	inpTitle : PropTypes.string,
	placeholder : PropTypes.string,
	val : PropTypes.string,
	disabled : PropTypes.bool,
	readonly : PropTypes.bool,
	maxLeng : PropTypes.number,
	changeCall : PropTypes.func,
}

export default InputTxt;