import React, {useEffect, useContext} from 'react';


import {GState} from 'Router/GState';
import Buttons from 'ui_component/buttons';



const Login = () => {
	const rootEl = document.querySelector('#root');
	let {loginYn, setLoginYn} = useContext(GState);
	
	const loginClickFn = (e)=>{
		console.log('loginClickFn =========== ');
		setLoginYn(true);
	}

	useEffect(()=>{
		rootEl.classList.add('loginPage');

		return()=>{
			rootEl.classList.remove('loginPage');
		}
	});

	return (
		<div className="loginWrap">

			<div className="loginBox">
				<div className="rowCase">
					<strong className="tit">ID</strong>
					<div className="inpLogin">
						<input type="text" title="아이디를 입력해주세요" />
					</div>
				</div>
				
				<div className="rowCase">
					<strong className="tit">PW</strong>
					<div className="inpLogin">
						<input type="text" title="비밀번호를 입력해주세요" />
					</div>
				</div>
			</div>

			<div className="loginBtnBox">
				<div>
					<Buttons name="btnItemL02" txt="LOGIN" clickCall={loginClickFn} />
				</div>
			</div>

		</div>
	);
}

export default Login;