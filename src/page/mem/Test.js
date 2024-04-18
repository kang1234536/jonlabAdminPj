import { useEffect, useState, useContext } from 'react';
import {GState} from 'Router/GState';
import Buttons from 'comUI/buttons/buttons';

const Test = () => {

	let {axios} = useContext(GState);
	const rootEl = document.querySelector('#root');
	
	const [imageURL, setImageURL] = useState(null);


	const onChangeImage = async e => {
	  let file = e.target.files[0];
	  sessionStorage.setItem('img', file.name);
	  const formData = new FormData();  // formData 생성
      formData.append('image', e.target.files[0]);  // 이미지 파일 값 할당
	  
	  await axios.post("/api2/upload/image",  
	  	formData,
		{header: {
			'Content-Type': 'multipart/form-data',  // 데이터 형식 지정
		},
		}).then((res) => {
			console.log(res);
		}).catch((res) => {
			// 실패했을 경우
			console.error("실패 ", res);
		});	


	};
	//getImage
	const getImage =  function(){
		console.log('check')
		 axios.post("/api2/getImage",
		 {
			fileName : sessionStorage.getItem('img'),
		 },  
		{header: {
			"Content-type": "application/json; charset=UTF-8",
		},
		}).then((res) => {
			console.log(res);
			setImageURL(res.data);
		}).catch((res) => {
			// 실패했을 경우
			console.error("실패 ", res);
		});	

	};

	useEffect(() => {
		if (!rootEl.classList.contains('loginPage')) rootEl.classList.add('loginPage');

		return () => {
			rootEl.classList.remove('loginPage');
		}
	});

	return (
		
		<div className="memJoinWrap">

			<div class="registWrap">
				{/* test */}
				<div>
					테스트용도 <input type="file"  onChange={onChangeImage}/>
				</div>
				<div>
					이미지가져오기 <Buttons name="btnItemL02" txt="test" clickCall={getImage} />
				</div>

			</div>
			<div>
			<img  src = {imageURL}></img>
			</div>
		</div>
	);

}

export default Test;