import React, {useState, useEffect} from 'react';
import PageTitle from 'comUI/page_title';
import RegFoldItemBox from 'comUI/regist_folding_box';
import InputTxt from 'comUI/input/textbox';


const InpTxt = () => {
	
	return (
		<>
			<PageTitle
				title={'INPUT GUIDE'}
			/>

			<RegFoldItemBox
				title={'input text'}
				// helpTip={true}
			>

				<InputTxt
					inpType = "text"
					inpTitle = "{접근성용 타이틀}을 입력해주세요!!"
					placeholder = "placeholder"
					changeCall = {(val)=>{
						console.log(val);
					}}
				/>
				<br />

				<InputTxt
					inpType = "text"
					inpTitle = "{접근성용 타이틀}을 입력해주세요!!"
					readonly = {true}
					changeCall = {(val)=>{
						console.log(val);
					}}
				/>
				<br />
				
				<InputTxt
					inpType = "text"
					inpTitle = "{접근성용 타이틀}을 입력해주세요!!"
					disabled = {true}
					changeCall = {(val)=>{
						console.log(val);
					}}
				/>
				
			</RegFoldItemBox>

		</>
	);
}

export default InpTxt;