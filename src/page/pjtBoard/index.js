import React, {} from 'react';
import {useNavigate} from 'react-router-dom';

import Buttons from 'comUI/buttons/buttons';
import InputTxt from 'comUI/inpTxt/inputTxt';


const PjtBoard = () => {
	let linkDetail = useNavigate();
	const goDetailFn = ()=>{
		linkDetail('/pjtBoard/detail');
	}
 
  return (
	<>
		<div className="srcInqhWrap">
			<div className="srchInner">
				<div className="srchBox">

					<div className="srchRow">
						<div className="col">
							<div className="tit">
								<strong>제목</strong>
							</div>
							<div className="cont">
								<InputTxt
									inpType="text"
									inpTitle="제목을 입력해주세요"
								/>
							</div>
						</div>
					</div>

					<div className="srchRow">
						<div className="col">
							<div className="tit">
								<strong>키워드</strong>
							</div>
							<div className="cont">
								<InputTxt
									inpType="text"
									inpTitle="키워드를 입력해주세요"
								/>
							</div>
						</div>
					</div>
					
				</div>

				<div className="srchBtnBox">
					<div>
						<Buttons name="btnItem02" txt="검색" />
					</div>
					<div>
						<Buttons name="btnItem03" txt="초기화" />
					</div>
				</div>
			</div>
		</div>

		<div className="inquiryInfoWrap">
			<div className="total">
				총 <span className="num">1</span>건
			</div>
		</div>

		<div className="tblWrap">
			<table>
				<caption>table sample</caption>
				<colgroup>
					<col style={{'width' : '8%'}} />
					<col style={{'width' : '20%'}} />
					<col style={{'width' : 'auto'}} />
					<col style={{'width' : '10%'}} />
				</colgroup>
				<thead>
					<tr>
						<th>NO</th>
						<th>업체</th>
						<th>프로젝트 제목</th>
						<th>등록일</th>
					</tr>
				</thead>
				<tbody>
					<tr onClick={goDetailFn}>
						<td>1</td>
						<td>BNK 부산은행</td>
						<td>부산은행 사용자중심 모바일뱅킹 재구축</td>
						<td>2023.03.31</td>
					</tr>
				</tbody>
			</table>
		</div>
	</>
  );
}


export default PjtBoard;