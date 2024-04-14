import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


const Radiobox = ({objOpt, checkIdx, groupName, setState}) => {
	const [activeIndex, setActiveIndex] = useState(checkIdx ? checkIdx : 0);

	useEffect(()=>{
		setState(objOpt[activeIndex].value);
	});

	return (
		<>
			{objOpt && objOpt.map((data, i)=>(
				<label key={i} className={`radioItem ${activeIndex === i ? 'checked' : ''}`}>
					<span>
						<input 
							type="radio"
							name={groupName}
							value={data.value}
							onClick={()=> setActiveIndex(i)}
							defaultChecked={activeIndex === i  ? 'checked' : ''}
						/>
					</span>
					<em>{data.optName}</em>
				</label>
			))}
		</>
	);
}

Radiobox.propTypes = {
	checkIdx : PropTypes.number,
	groupName : PropTypes.any.isRequired,
	setState : PropTypes.func.isRequired,
	objOpt : PropTypes.array.isRequired,
}

export default Radiobox;