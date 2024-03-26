import React, {useEffect, useState} from 'react';

import Buttons from 'ui_component/buttons';
import InputTxt from 'ui_component/inpTxt/inputTxt';


const PjtBoard = () => {
 
  return (
	<>
		<div className="srchWrap">
			<div className="srchInner">
				<div className="srchBox">
					<div className="srchRow">
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
					<div className="srchRow">
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
	</>
  );
}


export default PjtBoard;