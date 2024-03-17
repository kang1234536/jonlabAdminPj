import React, { useState } from 'react';
import { useQuery, useMutation,  NetworkStatus} from "@apollo/client";
import * as GQL from "apollo/user/user";




const Main = () => {
	
	let [userId , setUserId] 					= useState('');
	let [userPw , setUserPw] 					= useState('');

	let [userId2 , setUserId2] 					= useState('');
	let [userPw2 , setUserPw2] 					= useState('');
	let [loginState , setLoginState]		   	= useState('N');
	let [loginCount , setLoginCount]			= useState(0);
	 const { loading, error, data, networkStatus,  refetch } = useQuery(GQL.Login, {
		variables: {
			user_id : userId2,
			user_pw : userPw2
			}
		},
		{  
			 enabled: false, 
			 notifyOnNetworkStatusChange: true,
			 fetchPolicy: "network-only"
		},
	);

	if (data != null ){
		if (data.COM_USER_INFO.length == 1 && loginState == 'N') {
			setLoginState('Y')
			alert('로그인성공');
		}	
		if (data.COM_USER_INFO.length == 0 && loginCount > 0) {
			alert('로그인 실패하였습니다.')
			setLoginCount(0)
		}
	}


	function saveUserId(id) {
		setUserId(id);
	}

	function saveUserPw(pw) {
		setUserPw(pw);
	}

	function Login() {
		setUserId2(userId);
		setUserPw2(userPw);
		setLoginCount(loginCount + 1)
		refetch();
	}
	
	return (
		
		<div className="contents">
			MAIN
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			아이디
			<input	onChange={e => saveUserId(e.target.value)} style={{
    		'position': 'absolute',
    		'background': 'white'
			}}/>
			<br/>
			비밀번호
			<input onChange = {e => saveUserPw(e.target.value)} style={{
    		'position': 'absolute',
    		'background': 'white'
			}}/>
			<br/>
			<button onClick={Login}>로그인</button>
		</div>
		
	);
}

export default Main;