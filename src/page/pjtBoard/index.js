import React, {useContext, useState, useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {GState} from 'Router/GState';
import Buttons from 'comUI/buttons/buttons';
import InputTxt from 'comUI/input/textbox';


const PjtBoard =  () => {
	let linkDetail = useNavigate();
	const [board, setBoard]	= useState([]);
	let {axios} = useContext(GState);
	
	const goDetailFn = ()=>{
		linkDetail('/pjtBoard/detail');
	}

	useEffect(()=>{
		console.log("rendering~")
		axios.post("/api/getBoard",  
		{},
		{header: {
			// 'Content-Type': 'multipart/form-data',  // 데이터 형식 지정
		},
		}).then((res) => {
			console.log(res.data);
			setBoard(res.data);
		}).catch((res) => {
			// 실패했을 경우
			console.error("실패 ", res);
		});

	}, []);

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
				{/* 게시판 DB 조회  */}
				<tbody>
					 {
						board.map(function(val,idx){
							return(
										<tr key={idx}>
												<td>
													{val.BNO}
												</td>
												<td>
													{val.company_name}
												</td>
												<td>
													{val.project_name}
												</td>
												<td>
													{val.regist_date}
												</td>
										</tr>
									)
							}
						)
					} 
				</tbody>
			</table>
		</div>
	</>
  );
}


export default PjtBoard;