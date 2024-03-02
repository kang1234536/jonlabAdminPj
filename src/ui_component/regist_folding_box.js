import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LayerPopup from 'ui_component/layer_popup';
import Tooltip from 'ui_component/Tooltip';
import Buttons from 'ui_component/buttons';

const RegFoldItemBox = ({children, title, helpTip, tooltip, essential, closed}) => {
	const classEssent = essential ? 'essential' : '';
	const [openConts, setOpenConts] = useState(closed ? false : true);//false 닫힘, true:열림

	const openFoldFn = (e)=>{
		console.log(e.target);
		setOpenConts(openConts ? false : true)
	}

	return (
		<section className="regItemWrap">
			<div className="titBox" onClick={openFoldFn}>
				<div className="titInner">
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

				<Buttons btnType={'button'} name={`btnFold ${openConts ? 'active' : ''}`} txt={openConts ? '닫기' : '열기'} blind={true} clickCall={openFoldFn} />
			</div>
			<div className="regInptBox" style={{'display' : openConts ? 'block' : 'none'}} aria-hidden={openConts ? 'false' : 'true'} >
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