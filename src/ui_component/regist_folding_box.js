import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LayerPopup from 'ui_component/layer_popup';
import Tooltip from 'ui_component/Tooltip';

const RegFoldItemBox = ({children, title, helpTip, tooltip, essential, closed}) => {
	const classEssent = essential ? 'essential' : '';
	const [openConts, setOpenConts] = useState(closed ? false : true);//false 닫힘, true:열림

	return (
		<section className={`regItemWrap ${openConts ? '':'closed'}`}>
			<div className="titBox" role="button" tabIndex="0" onClick={()=> setOpenConts(openConts ? false : true)}>
				<strong className={`tit ${classEssent}`}>{title}</strong>
				{tooltip && (
					<Tooltip>
						{tooltip}
					</Tooltip>
				)}
				{helpTip && (
					<LayerPopup
						btnName={'도움말팝업'}
						title={'도움말'}
					>
						<div className="layerContainer">
							<div className="layerConts">
								{helpTip}
							</div>
						</div>
					</LayerPopup>
				)}
			</div>
			<div className="regInptBox" style={{'display' : openConts ? 'block' : 'none'}} >
				{children}
			</div>
		</section>
	);
}

RegFoldItemBox.propTypes = {
	closed : PropTypes.bool,
	essential : PropTypes.any,
	helpTip : PropTypes.any,
	tooltip : PropTypes.any,
	children : PropTypes.any.isRequired,
	title : PropTypes.string.isRequired,
}

export default RegFoldItemBox;