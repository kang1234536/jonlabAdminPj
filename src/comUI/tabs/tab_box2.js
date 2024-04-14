import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TabCmpt02 = ({children, setIndex, tabItems, setViewBox}) => {

	console.log('TabCmpt start ========= ');
	console.log(this);

	const [activeIndex, setActiveIndex] = useState(setIndex || 0);
	const tabListWrap = useRef(null);
	const tabPanelWrap = useRef(null);

	Object.tabChangeFn = (idx)=>{
		setActiveIndex(idx);
	}

	useEffect(()=>{
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
									return <li key={i} className="tabItem active"><button type="button" title="선택됨" onClick={()=>Object.tabChangeFn(i)}><span>{val}</span></button></li>;
								}else{
									return <li key={i} className="tabItem"><button type="button" onClick={()=>Object.tabChangeFn(i)}><span>{val}</span></button></li>;
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

TabCmpt02.propTypes = {
	tabItems : PropTypes.array.isRequired,
	children : PropTypes.any.isRequired,
	setViewBox : PropTypes.func.isRequired,
	setIndex : PropTypes.number,
}

export default TabCmpt02;