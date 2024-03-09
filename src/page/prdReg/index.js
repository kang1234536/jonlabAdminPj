import React, {useEffect, useState} from 'react';
import Layer from 'layer';
import Buttons from 'ui_component/buttons'


const PrdReg = () => {
	const [isPrevPopOpen, setIsPrevPopOpen] = useState(false);

	const openPrevPop = ()=>{
		setIsPrevPopOpen(true);
	}

	useEffect(()=>{

	}, []);
 
  return (
	<>
		<div className="contents">

			<div className="fixedBtnBox">
				<div className="btnR">

				{/* name, btnType, txt, clickCall, blind, children */}
					<Buttons
						name='btnItemL03'
						txt='미리보기'
						clickCall={openPrevPop}
					/>
					<Buttons
						name='btnItemL03'
						txt='임시저장하기'
					/>
					<Buttons
						name='btnItemL02'
						txt='저장하기'
					/>
					<Buttons
						name='btnItemL'
						txt='취소하기'
					/>
				</div>
			</div>
		</div>

		{/* 팝업 sample */}
		{
			isPrevPopOpen && 
			<Layer 
				idName = {'previewModal'}
				layerTitle="미리보기"
				setClose = {setIsPrevPopOpen}
			>
				modal popup sample
			</Layer>
		}
	</>
  );
}


export default PrdReg;