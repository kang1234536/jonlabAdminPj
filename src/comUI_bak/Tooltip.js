import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({children}) => {
	const [openTooltip, setOpenTooltip] = useState(false);
	const domClickFn = ()=>{
		console.log('domCLickFn');
		setOpenTooltip(openTooltip ? false : true);
	}

	useEffect(()=> {
		if(openTooltip) document.addEventListener('click', domClickFn);

		return ()=>{
			document.removeEventListener('click', domClickFn);
		}
	});

	return (
		<span className="tooltipWrap" style={{'zIndex' : openTooltip ? '10' : '0'}}>
			<button type="button" onClick={(e)=>{e.stopPropagation(); return setOpenTooltip(openTooltip ? false : true);}}><em>팁가이드</em></button>
			<div className="tipCont" onClick={(e)=>e.stopPropagation()} style={{'display' : openTooltip ? 'block' : 'none'}}>
				{children}
			</div>
		</span>
	);
}

Tooltip.propTypes = {
	children : PropTypes.any.isRequired,
}

export default Tooltip;