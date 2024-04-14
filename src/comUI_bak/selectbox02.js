import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Selectbox02 = ({defaultVal, selectVal, width}) => {
  let value = selectVal;
  let defaultValue = defaultVal || value[0];
  const [selectValue, setSelectValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectWrap = useRef(null);

  const chVal = (val)=>{
    setSelectValue(val)
  }
  const openBox = (e)=>{e.nativeEvent.stopImmediatePropagation();
    console.log(e.nativeEvent);
    var open = false;
    if(isOpen) {
      open = false;
    }else{
      open = true;
    }
    setIsOpen(open);
  }
  const domClickFn = ()=>{
    setIsOpen(false);
  }

  useEffect(()=>{
    if(selectValue === '') setSelectValue(defaultValue);
    document.addEventListener('click', domClickFn);
    return()=>{
      document.removeEventListener('click', domClickFn);
    }
  });

  return (
    <div className={`dsigSelectWrap02 ${isOpen ? 'active' : ''}`} style={{'width' : width, 'zIndex' : isOpen && '10'}} ref={selectWrap} >
      <div className="selected">
        <button type="button" onClick={(e)=> openBox(e)}>
          {selectValue}
        </button>
      </div>
      <ul className="selectOpt" style={{'display' : isOpen?'block':'none'}} >
        {value.length > 0 && value.map((item, key)=>{
          return <li key={key}><button type="button" onClick={()=>chVal(item)}>{item}</button></li>;
        })}
      </ul>
    </div>
  );
}

Selectbox02.propTypes = {
  width :  PropTypes.string,
  defaultVal :  PropTypes.string,
  selectVal :  PropTypes.array.isRequired,
}

export default Selectbox02;