import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({title, essential_title}) => {
	return (
		<div className="pageTitleWrap">
			<h2 className="pageTitle">{title}</h2>
			{essential_title && (
				<span className="essential">{essential_title}</span>
			)}
		</div>
	);
}

PageTitle.propTypes = {
	essential_title : PropTypes.string,
	title : PropTypes.string.isRequired,
}

export default PageTitle;