
import React, {useEffect, useContext, useRef} from 'react';
// import {QL_LOGIN} from "apollo/user/user";
import {GState} from 'Router/GState';
import Buttons from 'ui_component/buttons';

const Login = () => {
	const rootEl = document.querySelector('#root');
	
	let {setLoginYn} = useContext(GState);
	let {client} = useContext(GState);
	let {axios} = useContext(GState);

	console.log(setLoginYn);
	console.log(client);

	

	const inpID = useRef(null);
	const inpPW = useRef(null);
	
	

	const loginClickFn = (e)=>{
		console.log('loginClickFn =========== ');
		axios.post("/api/login2",
			{ 
				user_id : inpID.current.value,
				user_pw : inpPW.current.value,
			}, 
			 {header: {
						// "Context-Type": "multipart/form-data",
					},
			}).then((res) => {
									loginChkFn(res.data);
							}
					).catch((res) => {
						// 실패했을 경우
						console.error("실패 ", res);
						}
					);
	};

	function loginChkFn(data) {
		if (data == null || data == "") {
			alert('실패');
		}	else {
			alert('성공');
			setLoginYn(true);
			localStorage.setItem('logginYn', 'true');
		}
	} 

	useEffect(()=>{
		if(!rootEl.classList.contains('loginPage')) rootEl.classList.add('loginPage');

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
						<input type="text" title="아이디를 입력해주세요" ref={inpID}/>
						{/* <input type="text" title="아이디를 입력해주세요" value={idValue} onChange={saveUserId}/> */}
					</div>
				</div>
				
				<div className="rowCase">
					<strong className="tit">PW</strong>
					<div className="inpLogin">
						<input type="text" title="비밀번호를 입력해주세요" ref={inpPW}/>
						{/* <input type="text" title="비밀번호를 입력해주세요" value={pwValue} onChange={saveUserPw}/> */}
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