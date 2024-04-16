import React, {useRef} from 'react';
import PageTitle from 'comUI/page_title';
import RegFoldItemBox from 'comUI/regist_folding_box';
import Selectbox02 from 'ui_component/selectbox02';
import Buttons from 'comUI/buttons/buttons';


const RegTemplate = () => {
	const iptNum = useRef(null);

	const btnClick1 = (e)=>{
		console.log('btn01 click ========== ');
	}

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
				title={'입력 카테고리 타이틀영역 필수'}
				essential={true}
				// closed={true}
				tooltip = {
					<ul>
						<li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
						<li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
					</ul>
				}
			>
				<InputTxt
					maxLeng={9999}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'입력 카테고리 타이틀영역02'}
				helpTip={
					<div className="layerTxt">
						취급 상품과 관련된&nbsp;카테고리를 선택해야 하며, 카테고리명 검색 탭에서 등록하고자 하는&nbsp;상품군의 카테고리를 선택하여 등록해 주시면 됩니다.
					</div>
				}
			>
			  <div className="regUnitRow">
				  <InputNum
					width = {'200px'}
					unit={'원'}
					ref={iptNum}
				  />
				  <span className="unitTxt">할인</span>
			  </div>
			</RegFoldItemBox>
			
			<RegFoldItemBox
				title={'입력 카테고리 타이틀영역02'}
				helpTip={
					<div className="layerTxt">
						취급 상품과 관련된&nbsp;카테고리를 선택해야 하며, 카테고리명 검색 탭에서 등록하고자 하는&nbsp;상품군의 카테고리를 선택하여 등록해 주시면 됩니다.
					</div>
				}
			>
			  <Selectbox02
				width = {'200px'}
				defaultVal = {'1개'}
				selectVal = {['1개', '2개', '3개', '4개']}
			  />

			  <Selectbox02
				// width = {'200px'}
				defaultVal = {'낮은 가격순'}
				selectVal = {['등록순', '가나다순', '높은 갸격순', '낮은 가격순']}
			  />
			</RegFoldItemBox>

			<div className="fixedBtnBox">
				<div className="btnR">
					<Buttons btnType={'button'} name={'btnItemL03'} txt={'미리보기'} clickCall={btnClick1} />
					<Buttons btnType={'button'} name={'btnItemL03'} txt={'임시저장하기'} />
					<Buttons btnType={'button'} name={'btnItemL02'} txt={'저장하기'} />
					<Buttons btnType={'button'} name={'btnItemL'} txt={'취소하기'} />
				</div>
			</div>

		</>
	);
}

export default RegTemplate;