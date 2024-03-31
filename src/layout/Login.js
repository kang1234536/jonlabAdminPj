
import React, {useEffect, useContext, useState} from 'react';
import { useQuery, useMutation,  NetworkStatus} from "@apollo/client";
import * as GQL from "apollo/user/user";
import {GState, userLoginFn} from 'Router/GState';
import Buttons from 'ui_component/buttons';



const Login = () => {
	const rootEl = document.querySelector('#root');
	let {setLoginYn} = useContext(GState);
	
	const [idValue, setId] = useState('');
	const [pwValue, setPw] = useState('');
	const [userInfo , setUserInfo] = useState('');

	const saveUserId = event => {
		setId(event.target.value);
	};
	
	  const saveUserPw = event => {
		setPw(event.target.value);
	};

	const { loading, error, data, networkStatus,  refetch } = useQuery(GQL.Login, {
		variables: {
			user_id : idValue,
			user_pw : pwValue
			}
		},
		{  
			 enabled: false, 
			 notifyOnNetworkStatusChange: true,
			 fetchPolicy: "network-only"
		},
	);
		
	const loginClickFn = (e)=>{
		console.log('loginClickFn =========== ');
		
		if(data != undefined) {
			console.log('loginClickFn =========== ' + data.COM_USER_INFO);
			if (data.COM_USER_INFO.length == 1) {
				setUserInfo(data.COM_USER_INFO);
				userLoginFn({
					success : ()=>{
						setLoginYn(true);
						localStorage.setItem('logginYn', 'true');
					}
				})
			}	else {
				alert('로그인실패');
			}
		}	else {
			alert('로그인실패');
		}
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
						<input type="text" title="아이디를 입력해주세요" value={idValue} onChange={saveUserId}/>
					</div>
				</div>
				
				<div className="rowCase">
					<strong className="tit">PW</strong>
					<div className="inpLogin">
						<input type="text" title="비밀번호를 입력해주세요" value={pwValue} onChange={saveUserPw}/>
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