import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';


const LayerPopup = ({children, title, btnName}) => {
	let bodyTag = null;
	const helpItemBox = useRef(null);
	const layerWrap = useRef(null);
	const layerMask = document.createElement('div');
	const openLayerFn = (e)=>{
		e.stopPropagation();
		layerMask.classList.add('layerMask');
		bodyTag.appendChild(layerMask);
		bodyTag.appendChild(layerWrap.current);
		layerWrap.current.style.display = 'block';
		layerMask.addEventListener('click', clostLayerFn);
	}
	const clostLayerFn = (e)=>{
		e.stopPropagation();
		layerMask.remove();
		helpItemBox.current.appendChild(layerWrap.current);
		layerWrap.current.style.display = 'none';
	}

	useEffect(()=>{
		if(!bodyTag) bodyTag = document.querySelector('body');
	});

	return (
		<span className="helpItemBox" ref={helpItemBox}>
			<button type="button" className="btnHelpTip" onClick={(e)=>openLayerFn(e)}><em>{btnName}</em></button>
			<article className="layerWrap" ref={layerWrap} >
				<header>
					<h1 className="layerTit">{title}</h1>
				</header>
				{children}

				<button type="button" className="btnCloseLayer" onClick={(e)=>clostLayerFn(e)}><em>닫기</em></button>
			</article>
		</span>
	);
}

LayerPopup.propTypes = {
	children : PropTypes.any.isRequired,
	title : PropTypes.any,
	btnName : PropTypes.string.isRequired,
}

export default LayerPopup;