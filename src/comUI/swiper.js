import React, {forwardRef} from 'react';
// import {forwardR} from 'react-router-dom';
import Swiper from 'swiper';
import PropTypes from 'prop-types';

const swiperCompt = forwardRef(({children}) => {
	

	

	return (
		<div className="swiperWrap" ref={swiperWrap}>
			<div class="swiper-container">
				<ul class="swiper-wrapper">
					{children}
				</ul>
			</div>
		</div>
	);
});

swiperCompt.propTypes = {
	children : PropTypes.node.isRequired,
}

export default swiperCompt;