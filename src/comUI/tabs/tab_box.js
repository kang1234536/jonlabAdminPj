import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const TabCmpt = forwardRef(({children, setIndex, tabItems, setViewBox}, ref) => {
	const [activeIndex, setActiveIndex] = useState(setIndex || 0);
	const tabListWrap = useRef(null);
	const tabPanelWrap = useRef(null);

	const tabChangeFn = (idx)=>{
		setActiveIndex(idx);
	}


	useImperativeHandle(ref, ()=>{
		return {
			tabChange : (idx)=>{
				tabChangeFn(idx);
			}
		}
	})

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
});

TabCmpt.propTypes = {
	tabItems : PropTypes.array.isRequired,
	children : PropTypes.any.isRequired,
	setViewBox : PropTypes.func.isRequired,
	setIndex : PropTypes.number,
}

export default TabCmpt;