
import React, {useEffect, useContext, useRef} from 'react';
import { useQuery } from "@apollo/client";
import {QL_LOGIN} from "apollo/user/user";
import {GState} from 'Router/GState';
import Buttons from 'ui_component/buttons';

const Login = () => {
	const rootEl = document.querySelector('#root');
	let {setLoginYn} = useContext(GState);

	const inpID = useRef(null);
	const inpPW = useRef(null);
	
	// const [idValue, setId] = useState('');
	// const [pwValue, setPw] = useState('');
	// const [userInfo , setUserInfo] = useState('');

	// const saveUserId = event => {
	// 	setId(event.target.value);
	// };
	
	// const saveUserPw = event => {
	// 	setPw(event.target.value);
	// };

	// const { loading, error, data } = useQuery(QL_LOGIN, {
	// 	variables: {
	// 		user_id : 'kha0202',
	// 		user_pw : '1234'
	// 	}
	// });

	const loginClickFn = (e)=>{
		console.log('loginClickFn =========== ');
		setLoginYn(true);
		localStorage.setItem('logginYn', 'true');


		// const {data} = getUserMutat({
		// 	variables: {
		// 		user_id : 'kha0202',
		// 		user_pw : '1234'
		// 	}
		// });
		// var {data} = getUserMutat();
		// userLoginFn({
		// 	success : ()=>{
		// 		setLoginYn(true);
		// 		localStorage.setItem('logginYn', 'true');
		// 	}
		// })
		
		// if(data != undefined) {
		// 	console.log('loginClickFn =========== ' + data.COM_USER_INFO);
		// 	if (data.COM_USER_INFO.length == 1) {
		// 		setUserInfo(data.COM_USER_INFO);
		// 		userLoginFn({
		// 			success : ()=>{
		// 				setLoginYn(true);
		// 				localStorage.setItem('logginYn', 'true');
		// 			}
		// 		})
		// 	}	else {
		// 		alert('로그인실패');
		// 	}
		// }	else {
		// 	alert('로그인실패');
		// }
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