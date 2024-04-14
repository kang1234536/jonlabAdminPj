import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const InputTxt = ({inpType, inpTitle, disabled, readonly, minLeng, maxLeng, ver}) => {

	return (
		<span className="inptxtItem">
			<input type={inpType} title={inpTitle}  />
			{/* input text maxlength default length 524288 */}
			{/* <input type="text" ref={ipt} minLength={minLeng ? minLeng : 0} maxLength={maxLeng ? maxLeng : 524288} /> */}
		</span>
	);
}

InputTxt.propTypes = {
	inpType : PropTypes.string.isRequired,
	inpTitle : PropTypes.string,
	disabled : PropTypes.bool,
	readonly : PropTypes.bool,
	// minLeng : PropTypes.number,
	// maxLeng : PropTypes.number,
	// ver : PropTypes.string,
}

export default InputTxt;