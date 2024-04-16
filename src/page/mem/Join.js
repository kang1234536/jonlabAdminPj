import { useEffect } from 'react';

import InputTxt from 'comUI/input/textbox';

const Join = () => {

	const rootEl = document.querySelector('#root');

	useEffect(() => {
		if (!rootEl.classList.contains('memJoin')) rootEl.classList.add('memJoin');

		return () => {
			rootEl.classList.remove('memJoin');
		}
	});

	return (
		<>

			<div class="registWrap">
				<div class="registTit">
					<strong class="tit">아이디</strong>
				</div>
				<div class="registConts">
					 <InputTxt
					 	inpType = "text"
						inpTitle = "아이디를 입력해주세요"
						placeholder = "ID"
						changeCall = {(val)=>{
							console.log(val);
						}}
					/>
				</div>
			</div>

		</>
	);

}

export default Join;