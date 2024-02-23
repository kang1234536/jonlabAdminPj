import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const RegiImage = () => {
  const iptFile = useRef(null);
  const [imageURL, setImageURL] = useState(null);
  const onChangeFn = (e)=>{
    var reader = new FileReader();
    var files = e.target.files[0];
    if(files) var readerFile = reader.readAsDataURL(files);

    reader.onloadend = (evt)=>{
      // console.log(evt.target.result)
      setImageURL(evt.target.result);
    }
  }
  const iptFileOpen = ()=>{
    iptFile.current.click();
  }
  const resetData = ()=>{
    setImageURL(null);
    iptFile.current.value = null;
  }


  useEffect(()=>{
   
  });

  return (
    <span className="imgRegItem">
      <label>
        <input type="file" onChange={(e)=>onChangeFn(e)} ref={iptFile} />
      </label>
      {
        imageURL && 
        <>
          <div className="regImg" style={{'backgroundImage' : `url(${imageURL})`}}></div>
          <div className="funcBtn">
            <button type="button" className="zoomImg"><em>이미지 크게보기</em></button>
            <button type="button" className="chImg" onClick={()=>iptFileOpen()}><em>이미지 수정</em></button>
            <button type="button" className="delImg" onClick={()=>resetData()}><em>이미지 삭제</em></button>
          </div>
        </>
      }
    </span>
  );
}

// RegiImage.propTypes = {
//   width :  PropTypes.string,
//   defaultVal :  PropTypes.string,
//   selectVal :  PropTypes.array.isRequired,
// }

export default RegiImage;