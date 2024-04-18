import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {GState} from 'Router/GState';
import PageTitle from 'comUI/page_title';
import InputTxt from 'comUI/input/textbox';
import Buttons from 'comUI/buttons/buttons';

const Join = () => {

	const rootEl = document.querySelector('#root');

	let {axios} = useContext(GState);

	let userId = '';
	let userPw = '';
	
	const navigate = useNavigate();

	const userSaveFnc = ()=>{
		console.log('save user info');
		axios.post("/api/register",
			{ 
				user_id : userId,
				user_pw : userPw,
			}, 
			 {header: {
				// "Context-Type": "multipart/form-data",
			},
		}).then((res) => {
			console.log('회원가입 성공 ::: ' + JSON.stringify(res));
			localStorage.setItem('loginToken', res.data.token);
			navigate('/login');
		}).catch((res) => {
			// 실패했을 경우
			console.error("실패 ", res);
		});
	}

	const cancelJoinFnc = ()=>{
		console.log('cancel user info');
		navigate('/login', {replace : true});
	}

	useEffect(() => {

		if (!rootEl.classList.contains('memJoin')) rootEl.classList.add('memJoin');

		return () => {
			rootEl.classList.remove('memJoin');
		}
	});

	return (
		<>
			<PageTitle
				title={'회원가입'}
			/>

			<div className="registWrap">
				<div className="registTit">
					<strong className="tit">아이디</strong>
				</div>
				<div className="registConts">
					 <InputTxt
					 	inpType = "text"
						inpTitle = "아이디를 입력해주세요"
						placeholder = "ID"
						changeCall = {(val)=>{
							userId = val;
						}}
					/>
				</div>

				<div className="registTit">
					<strong className="tit">비밀번호</strong>
				</div>
				<div className="registConts">
					 <InputTxt
					 	inpType = "password"
						inpTitle = "비밀번호를 입력해주세요"
						placeholder = "PW"
						changeCall = {(val)=>{
							userPw = val;
						}}
					/>
				</div>
			</div>

			<div className="fixedBtnBox">
				<div className="boxR">
					<Buttons name="btnItemL02" txt="저장" clickCall={userSaveFnc} />
					<Buttons name="btnItemL03" txt="취소" clickCall={cancelJoinFnc} />
				</div>
			</div>

		</>
	);

}

export default Join;