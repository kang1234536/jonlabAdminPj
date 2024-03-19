import React, {useEffect, useState} from 'react';

import Buttons from 'ui_component/buttons';
import InputDefault from 'ui_component/input_default';


const PjtBoard = () => {

 
  return (
	<>
		<div className="srchWrap">
			<div className="srchBox">
				<div className="srchRow">
					<div className="tit">
						<strong>제목</strong>
					</div>
					<div className="cont">
						<InputDefault
							inpClass="inpCase"
							inpType="타이틀"
							inpTitle="타이틀을 입력해주세요"
							colNum="1"
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
	</>
  );
}


export default PjtBoard;