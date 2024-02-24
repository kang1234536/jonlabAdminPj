import React, { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import PropTypes from 'prop-types';

const TabCmpt = ({children, setIndex, tabName, setViewBox}) => {
	let wrapperName = null;
	const [activeIndex, setActiveIndex] = useState(setIndex || 0);
	const tabWrap = useRef(null);

	// const params = {
	// 	slidesPerView: 'auto',
	// 	WrapperEl: 'ul',
	// 	freeMode: true,
	// 	// pagination: {
	// 	// 	el: `.${wrapperName} .tabItem .swiper-pagination`,
	// 	// 	clickable: true,
	// 	// },
	// 	// on : {
	// 	// 	init : (swiper)=> {
	// 	// 		console.log(tabWrap.current.className);
	// 	// 	}
	// 	// }
	// }

	useEffect(()=>{
		setViewBox(activeIndex);
		if(wrapperName === null) wrapperName = tabWrap.current.className;
	}, [activeIndex]);

	return (
		<div className="tabWrap" ref={tabWrap}>
			<div className="tabItem">
				<div className="cmptSwiper">
					<ul>
						{
							tabName.map((val, i)=>{
								return <li key={i} className={activeIndex === i ? 'active' : ''}><button type="button" onClick={()=>setActiveIndex(i)}><span>{val}</span></button></li>;
							})
						}
					</ul>
				</div>
			</div>
			<div className="tabItemView">
				{children}
			</div>
		</div>
	);
}

TabCmpt.propTypes = {
	tabName : PropTypes.array.isRequired,
	children : PropTypes.any.isRequired,
	setViewBox : PropTypes.func.isRequired,
	setIndex : PropTypes.number,
}

export default TabCmpt;