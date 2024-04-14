import { useEffect } from 'react';

import InputTxt from 'comUI/inpTxt/inputTxt';

const Join = () => {

	const rootEl = document.querySelector('#root');

	useEffect(() => {
		if (!rootEl.classList.contains('loginPage')) rootEl.classList.add('loginPage');

		return () => {
			rootEl.classList.remove('loginPage');
		}
	});

	return (
		<div className="memJoinWrap">

			<div class="registWrap">
				<div class="registTit">
					<strong class="tit">Your Company</strong>
				</div>
				<div class="registConts">
					 <InputTxt type={"text"} />
				</div>
			</div>

		</div>
	);

}

export default Join;