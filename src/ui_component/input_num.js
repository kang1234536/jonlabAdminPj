import React, {useRef, useEffect, forwardRef} from 'react';
import PropTypes from 'prop-types';

const InputNum = forwardRef(({width, unit}, ref) => {
	const iptWrap = useRef(null);
	const ipt = useRef(null);

	useEffect(()=> {
		ipt.current.addEventListener('keyup', (e)=> {
			// console.log('keyup');
			var regexp = /[^0-9]/g;
			var val = e.target.value;
			e.target.value = val.replace(regexp, '');
		});
		ipt.current.addEventListener('focusin', (e)=> {
			// console.log(`e.target = `, e.target);
			iptWrap.current.classList.add('focus');
		});
		ipt.current.addEventListener('focusout', (e)=> {
			// console.log(`e.target = `, e.target);
			iptWrap.current.classList.remove('focus');
		});
	});

	return (
		<span className="inpNumItem" ref={iptWrap} style={{'width' : width ? width : '100%'}} >
			<input type="text" ref={ipt} />
			<em className="unit">{unit}</em>
		</span>
	);
})

InputNum.propTypes = {
	width : PropTypes.string,
	unit : PropTypes.string,
}

export default InputNum;