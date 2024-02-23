import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';

const PeriodSett = ({periodOpt, startDate, endDate}) => {
	let start = startDate.split('-');
	let end= endDate.split('-');
	const [dateFrom, setDateFrom] = useState(startDate ? new Date(parseInt(start[0], 10), parseInt(start[1], 10) - 1, parseInt(start[2], 10)) : new Date());
	const [dateTo, setDateTo] = useState(endDate ? new Date(parseInt(end[0], 10), parseInt(end[1], 10) - 1, parseInt(end[2], 10)) : new Date());

	return (
		<div className="periodWrap">
			{
				periodOpt && 
				<div className="periodOpt">
					{periodOpt.map((data, i)=>{
						return <button type="button" key={i} className="periodItem">{data}일</button>
					})}
				</div>
			}
			
			<div className="periodFrom">
				<span>
					<DatePicker
						onChange={setDateFrom}
						value={dateFrom}
					/>
				</span>
				<span>~</span>
				<span>
					<DatePicker
						onChange={setDateTo}
						value={dateTo}
					/>
				</span>
			</div>
		</div>
	);
}

PeriodSett.propTypes = {
	periodOpt : PropTypes.array.isRequired,
	startDate : PropTypes.string,
	endDate : PropTypes.string,
	// objOpt : PropTypes.array.isRequired,
}

export default PeriodSett;