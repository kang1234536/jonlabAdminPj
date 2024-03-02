import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const goPanel = ()=>{
	
}

const TabCmpt = ({children, setIndex, tabItems, setViewBox}) => {
	const [activeIndex, setActiveIndex] = useState(setIndex || 0);
	const tabListWrap = useRef(null);
	const tabPanelWrap = useRef(null);

	const tabChangeFn = (idx)=>{
		setActiveIndex(idx);
	}

	useEffect(()=>{
		console.log('dddd');
		setViewBox(activeIndex);
	}, [activeIndex]);

	return (
		<>
			<div className="tabListWrap" ref={tabListWrap}>
				<div className="tabListInner">
					<ul className="tabItems">
						{
							tabItems.map((val, i)=>{
								if(activeIndex === i) {
									return <li key={i} className="tabItem active"><button type="button" title="선택됨" onClick={()=>tabChangeFn(i)}><span>{val}</span></button></li>;
								}else{
									return <li key={i} className="tabItem"><button type="button" onClick={()=>tabChangeFn(i)}><span>{val}</span></button></li>;
								}
							})
						}
					</ul>
				</div>
			</div>
			<div className="tabPanelWrap" ref={tabPanelWrap}>
				{children}
			</div>
		</>
	);
}

TabCmpt.propTypes = {
	tabItems : PropTypes.array.isRequired,
	children : PropTypes.any.isRequired,
	setViewBox : PropTypes.func.isRequired,
	setIndex : PropTypes.number,
}

export default TabCmpt;