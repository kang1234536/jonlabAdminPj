import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Buttons from 'comUI/buttons/buttons';
import Layer from 'layer';

const RegFoldItemBox = ({children, title, helpTip, tooltip, essential, closed}) => {
	const btnFold = useRef(null);
	const classEssent = essential ? 'essential' : '';
	const [openConts, setOpenConts] = useState(closed ? false : true);//false 닫힘, true:열림

	const openFoldFn = (e)=>{
		e.stopPropagation();
		console.log(e.target);
		setOpenConts(openConts ? false : true)
	}

	useEffect(()=>{
		btnFold.current.addEventListener('click', openFoldFn);

		return(()=>{
			if(btnFold.current !== null) btnFold.current.removeEventListener('click', openFoldFn);
		})
	}, [openConts]);

	return (
		<>
			<section className="regItemWrap">
				<div className="titBox" ref={btnFold}>
					<div className="titInner">
						<strong className={`tit ${classEssent}`}>{title}</strong>
					</div>

					<Buttons btnType={'button'} name={`btnFold ${openConts ? 'active' : ''}`} txt={openConts ? '닫기' : '열기'} blind={true} clickCall={openFoldFn} />
				</div>
				<div className="regInptBox" style={{'display' : openConts ? 'block' : 'none'}} aria-hidden={openConts ? 'false' : 'true'} >
					{children}
				</div>
			</section>

		</>
	);
}

RegFoldItemBox.propTypes = {
	closed : PropTypes.bool,
	essential : PropTypes.any,
	children : PropTypes.node.isRequired,
	title : PropTypes.string.isRequired,
}

export default RegFoldItemBox;