import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({objOpt, setState}) => {
	let arrChk = [];
	let arrVal = [];

	const [checked, setChecked] = useState(null);

	const chCheckedFn = (e, index)=>{
		var target = e.target;
		var label = target.closest('label');
		var idx = index;
		var chk = checked;
		var val = [];

		if(target.checked) {
			label.classList.add('checked');
			chk[idx] = true;
		}else{
			label.classList.remove('checked');
			chk[idx] = false;
		}

		chk.forEach((data, idx)=>{
			console.log(data);
			if(data) {
				val.push(objOpt[idx].value);
			}
		});
		
		setChecked(chk);
		setState(val);
	}

	useEffect(()=>{
		// 최초 진입시 checked 값이 셋팅되지 않았을때만 실행
		if(checked === null) {
			objOpt.forEach((data)=>{
				if(data.checked) {
					arrChk.push(true);
					arrVal.push(data.value);
				}else{
					arrChk.push(false);
				}
			});
			setChecked(arrChk);
			setState(arrVal);
		}
	}, [checked]);

	return (
		<>
			{objOpt && objOpt.map((data, i)=>(
				<label key={i} className={`chkItem ${data.checked ? 'checked' : ''}`}>
					<span>
						<input
							type="checkbox"
							value={data.value}
							onClick={(e)=> chCheckedFn(e, i)}
							defaultChecked={data.checked ? 'checked' : ''}
						/>
					</span>
					<em>{data.optName}</em>
				</label>
			))}
		</>
	);
}

Checkbox.propTypes = {
	setState : PropTypes.func.isRequired,
	objOpt : PropTypes.array.isRequired,
}

export default Checkbox;