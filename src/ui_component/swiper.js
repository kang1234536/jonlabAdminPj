import React, { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import PropTypes from 'prop-types';

const swiperCompt = ({children}) => {
	

	useEffect(()=>{
		
	}, [activeIndex]);

	return (
		<div className="swiperWrap" ref={swiperWrap}>
			<div class="swiper-container">
				<ul class="swiper-wrapper">
					{children}
				</ul>
			</div>
		</div>
	);
}

// TabswiperComptCmpt.propTypes = {
// 	tabName : PropTypes.array.isRequired,
// 	children : PropTypes.any.isRequired,
// 	setViewBox : PropTypes.func.isRequired,
// 	setIndex : PropTypes.number,
// }

export default swiperCompt;