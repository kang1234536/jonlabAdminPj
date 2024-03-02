import React, {useState, useEffect, useRef} from 'react';
import PageTitle from 'ui_component/page_title';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import TabCmpt from 'ui_component/tab_box';

const TableItem = () => {
	const tabCmpt1 = useRef(null);
	const [tabPanel, setTabPanel] = useState(0);//tab contents view state

	const goPanel = (idx)=>{
		tabCmpt1.current.tabChange(idx);
	}

	useEffect(()=>{
		console.log('tabPanel ======== ', tabPanel);
	}, []);

	return (
		<div className="contents">
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
				title={'tab default'}
				tooltip={
					<p>
						기본 탭박스 메뉴와 해당 컨텐츠가 한화면에 같이 그려짐
					</p>
				}
			>
				<TabCmpt
					setIndex={tabPanel}
					tabItems={
						['Slide #1', 'Slide #2', 'Slide #3', 'Slide #4', 'Slide #5', 'Slide #6', 'Slide #7', 'Slide #8', 'Slide #9']
					}
					setViewBox={setTabPanel}
					ref = {tabCmpt1}
				>
					{
						tabPanel === 0 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'red'}}>
							TAB CONTENTS #01
							<br />

							<button type="button" onClick={()=>{goPanel(3)}}>4번탭으로 이동</button>
						</div>
					}
					{
						tabPanel === 1 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'blue'}}>
							TAB CONTENTS #02
						</div>
					}
					{
						tabPanel === 2 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'green'}}>
							TAB CONTENTS #03
						</div>
					}
					{
						tabPanel === 3 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'orange'}}>
							TAB CONTENTS #04
						</div>
					}
					{
						tabPanel === 4 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'yellow'}}>
							TAB CONTENTS #05
						</div>
					}
					{
						tabPanel === 5 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'pink'}}>
							TAB CONTENTS #06
						</div>
					}
					{
						tabPanel === 6 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'blueviolet'}}>
							TAB CONTENTS #07
						</div>
					}
					{
						tabPanel === 7 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'teal'}}>
							TAB CONTENTS #08
						</div>
					}
					{
						tabPanel === 8 &&
						<div className="tabPanel" style={{'padding' : '20px', 'backgroundColor' : 'green'}}>
							TAB CONTENTS #09
						</div>
					}
				</TabCmpt>
			</RegFoldItemBox>

		</div>
	);
}

export default TableItem;