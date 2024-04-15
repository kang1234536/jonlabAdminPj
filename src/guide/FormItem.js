import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'comUI/page_title';
import RegFoldItemBox from 'comUI/regist_folding_box';
import CheckItem from 'comUI/form/checkitem';
import RadioItem from 'comUI/form/radioitem';
import RadioButtonBox from 'comUI/radiobuttonbox';
import Buttons from 'comUI/buttons/buttons';

const FormItem = () => {
	
	const [checkState, setCheckState] = useState(null);//checkbox 중복 선택 가능으로 state에 배열로 value값 저장
	const [radioState, setRadioState] = useState(null);//radio 단일 선택 선택한 value값 저장
	const [btnRadioState, setBtnRadioState] = useState(null);//button type radio 단일 선택 선택한 value값 저장

	const btnClickFn = (e, el)=>{
		var el = e.thisEl;
		var txt = el.querySelector('span').innerText;
		console.log(`button click callBack ========== ${txt}`);
	}

	useEffect(()=> {
		console.log(`checkState = ${checkState}`);
	},[checkState]);
	useEffect(()=> {
		console.log(`radioState = ${radioState}`);
	},[radioState]);
	useEffect(()=> {
		console.log(`btnRadioState = ${btnRadioState}`);
	},[btnRadioState]);
	
	return (
		<>
			<PageTitle
				title={'페이지 타이틀명'}
				essential_title = {'필수 항목'}
				tooltip = {
					<ul>
						<li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
						<li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
					</ul>
				}
			/>

			<RegFoldItemBox
				title={'Button style'}
				// helpTip={true}
			>
				<div>
					<p>tiny</p>
					<br />
					<Buttons name="btnTiny" txt="btnTiny button" clickCall={btnClickFn} />
					&nbsp;
					<Buttons name="btnTiny02" txt="btnTiny button" clickCall={btnClickFn} />
					&nbsp;
					<Buttons name="btnTiny03" txt="btnTiny button" clickCall={btnClickFn} />
					<br />
					<br />
					
					<p>높이 : 40px</p>
					<br />
					<Buttons name="btnItem" txt="btnItem button" clickCall={btnClickFn} />
					<br />
					<Buttons name="btnItem02" txt="btnItem02 button" clickCall={btnClickFn} />
					<br />
					<Buttons name="btnItem03" txt="btnItem03 button" clickCall={btnClickFn} />
					
					<br /><br />
					<Link to="#" className="btnItem"><span>btnItem anchor</span></Link>
					<br />
					<Link to="#" className="btnItem02"><span>btnItem02 anchor</span></Link>
					<br />
					<Link to="#" className="btnItem03"><span>btnItem03 anchor</span></Link>
					<br />
					<br />
					<p>높이 : 56px</p>
					<br />
					<button type="button" className="btnItemL"><span>btnItemL button</span></button>
					<br />
					<button type="button" className="btnItemL02"><span>btnItemL02 button</span></button>
					<br />
					<button type="button" className="btnItemL03"><span>btnItemL03 button</span></button>
					<br /><br />
					<Link to="#" className="btnItemL"><span>btnItemL anchor</span></Link>
					<br />
					<Link to="#" className="btnItemL02"><span>btnItemL02 anchor</span></Link>
					<br />
					<Link to="#" className="btnItemL03"><span>btnItemL03 anchor</span></Link>
				</div>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'Check box style'}
				// helpTip={true}
			>
				<CheckItem 
					text = "check items01"
					checked = {true}
					changeCall = {(checkVal)=>{
						console.log('change value ::::: check items01', checkVal);
					}}
				/>
				<CheckItem 
					text = "check items02"
					changeCall = {(checkVal)=>{
						console.log('change value ::::: check items02', checkVal);
					}}
				/>
				<CheckItem 
					text = "check items03"
					changeCall = {(checkVal)=>{
						console.log('change value ::::: check items03', checkVal);
					}}
				/>
				<CheckItem 
					text = "check items04"
					changeCall = {(checkVal)=>{
						console.log('change value ::::: check items04', checkVal);
					}}
					disabled = {true}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'radio box style'}
				// helpTip={true}
			>
				<RadioItem 
					text = "radio items01"
					group = "rdoGroup01"
					changeCall = {(val)=>{
						console.log('change value ::::: radio items01', val);
					}}
				/>
				<RadioItem 
					text = "radio items02"
					group = "rdoGroup01"
					changeCall = {(val)=>{
						console.log('change value ::::: radio items02', val);
					}}
				/>
				<RadioItem 
					text = "radio items03"
					group = "rdoGroup01"
					disabled = {true}
					changeCall = {(val)=>{
						console.log('change value ::::: radio items03', val);
					}}
				/>
			</RegFoldItemBox>
				
			{/* <RegFoldItemBox
				title={'button radio box style'}
				// helpTip={true}
			>
				<RadioButtonBox
					objOpt={
						[
							{
								'optName' : '설정함',
								'value' : 'val01',
							},
							{
								'optName' : '설정안함',
								'value' : 'val02',
							}
						]
					}
					groupName={'settingRadio'}
					checkIdx={1}
					setState={setBtnRadioState}
				/>
				
			</RegFoldItemBox> */}

		</>
	);
}

export default FormItem;