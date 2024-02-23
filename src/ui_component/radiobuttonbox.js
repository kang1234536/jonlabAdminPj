import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


const Radiobox = ({objOpt, checkIdx, groupName, setState}) => {
	const [activeIndex, setActiveIndex] = useState(checkIdx ? checkIdx : 0);

	useEffect(()=>{
		setState(objOpt[activeIndex].value);
	});

	return (
		<div className={`btnRadioBox${objOpt.length > 2 ? (objOpt.length < 10 ? '0'+ (objOpt.length-1) : objOpt.length-1) : ''}`}>
			<div className="btnRadoCase">
				{objOpt && objOpt.map((data, i) => (
					<label key={i} className={ activeIndex === i ? 'checked' : '' }>
						<input 
							type="radio"
							name={groupName}
							value={data.value}
							onClick={()=> setActiveIndex(i)}
							defaultChecked={activeIndex === i  ? 'checked' : ''}
						/>
						<em>{data.optName}</em>
					</label>
				))}
			</div>
		</div>
	);
}

Radiobox.propTypes = {
	objOpt : PropTypes.array.isRequired,
	setState : PropTypes.func.isRequired,
	groupName : PropTypes.string.isRequired,
	checkIdx : PropTypes.number,
}

export default Radiobox;