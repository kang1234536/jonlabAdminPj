import React, {useEffect, useState} from 'react';
import PageTitle from 'ui_component/page_title';
import SimpleBar from 'simplebar-react';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import TabCmpt from 'ui_component/tab_box';
import Searchbox02 from 'ui_component/searchbox02';
import InputTxt from 'ui_component/input_txt';
import InputNum from 'ui_component/input_num';
import RadioButtonBox from 'ui_component/radiobuttonbox';
import Tooltip from 'ui_component/Tooltip';
import Radiobox from 'ui_component/radiobox';
import Checkbox from 'ui_component/checkbox';
import PeriodSett from 'ui_component/period_setting';
import Selectbox02 from 'ui_component/selectbox02';
import RegiImage from 'ui_component/regi_image';
import 'simplebar/dist/simplebar.min.css';


const ProductReg = () => {
  var [discountRegist, setDiscountRegist] = useState(null);//할인 등록 설정 선택
  var [discountOptSelect, setDiscoutnOptSlect] = useState(null);//할인 설정 옵션 선택
  var [periodDc, setPeriodDc] = useState(null);//할인 기간설정여부 선택
  var [priceTax, setPriceTax] = useState(null);//할인 기간설정여부 선택
  var [sellPeriod, setSellPeriod] = useState(null);//할인 기간설정여부 선택
  var [tabmenu, setTabmenu] = useState(null);//tab contents view state
  var [optSet01, setOptSet01] = useState(null);//tab contents view state
  

  useEffect(()=>{
    console.log(`discountOptSelect = ${discountOptSelect}`);
  }, [discountOptSelect]);
  useEffect(()=>{
    console.log(`discountRegist = ${discountRegist}`);
  }, [discountRegist]);
  useEffect(()=>{
    console.log(`periodDc = ${periodDc}`);
    if(periodDc) console.log(`periodDc = ${periodDc[0]}`);
  }, [periodDc]);
  useEffect(()=>{
    console.log(`priceTax = ${priceTax}`);
  }, [priceTax]);
  useEffect(()=>{
    console.log(`tabmenu = ${tabmenu}`);
  }, [tabmenu]);

  return (
    <div className="contents">

      {/* 타이트 영역 */}
      <PageTitle
        title={'상품등록'}
        essential_title = {'필수 항목'}
      />
      {/* // 타이트 영역 */}

      <RegFoldItemBox
        title={'카테고리'}
        essential={true}
        // closed={true}
        tooltip = {
          <ul>
            <li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
            <li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
          </ul>
        }
        closed={true}
      >
        
        <TabCmpt
          setIndex = {1}
          tabName={
            ['카테고리 검색', '카테고리 선택']
          }
          setViewBox={setTabmenu}
        >
          
          {
            tabmenu === 0 &&
            <div className="tabConts">
              <Searchbox02 width={'70%'} />
            </div>
          }
          {
            tabmenu === 1 &&
            <div className="tabConts">
              <div className="cateListWrap">
                <SimpleBar className="cateItemBox">
                  <ul className="cateItemCase">
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                    <li><button type="button">가구/인테리어</button></li>
                  </ul>
                </SimpleBar>
                <SimpleBar className="cateItemBox">
                  <ul className="cateItemCase">
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                    <li><button type="button">category0201</button></li>
                  </ul>
                </SimpleBar>
                <SimpleBar className="cateItemBox">
                  <ul className="cateItemCase">
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                    <li><button type="button">category0301</button></li>
                  </ul>
                </SimpleBar>
                <SimpleBar className="cateItemBox">
                  <ul className="cateItemCase">
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                    <li><button type="button">category0401</button></li>
                  </ul>
                </SimpleBar>
              </div>
            </div>
          }

        </TabCmpt>

      </RegFoldItemBox>

      <RegFoldItemBox
        title={'상품명'}
        essential={true}
        helpTip={
          <div className="layerTxt">
            취급 상품과 관련된&nbsp;카테고리를 선택해야 하며, 카테고리명 검색 탭에서 등록하고자 하는&nbsp;상품군의 카테고리를 선택하여 등록해 주시면 됩니다.
          </div>
        }
        closed={true}
      >
        <InputTxt maxLeng={1000} />
      </RegFoldItemBox>

      <RegFoldItemBox
        title={'판매가'}
        essential={true}
      >
        <div className="viewWrap">
          <ul>
            <li className="viewRow">
              <strong className="tit"><span className="essential">판매가</span></strong>
              <div className="cont">
                <InputNum
                  width = {'200px'}
                  unit={'원'}
                />
              </div>
            </li>
            <li className="viewRow">
              <strong className="tit">
                <span>할인</span>
                <Tooltip>
                  {'할인 관련 도움말 팝업 내용영역'}
                </Tooltip>
              </strong>
              <div className="cont">
                <RadioButtonBox
                  objOpt={
                    [
                      {
                        'optName' : '설정함',
                        'value' : '설정함',
                      },
                      {
                        'optName' : '설정안함',
                        'value' : '설정안함',
                      }
                    ]
                  }
                  groupName={'discountSetReg'}
                  checkIdx={0}
                  setState={setDiscountRegist}
                />

                {
                  discountRegist === '설정함' &&
                  <div className="rowBox">
                    <Radiobox
                      objOpt={
                        [
                          {
                            'optName' : '전체할인',
                            'value' : 'all',
                          },
                          {
                            'optName' : 'PC 할인',
                            'value' : 'pc',
                          },
                          {
                            'optName' : '모바일 할인',
                            'value' : 'mo',
                          }
                        ]
                      }
                      groupName={'dcOpt'}
                      checkIdx={0}
                      setState={setDiscoutnOptSlect}
                    />
                  </div>
                }
              </div>
              {/* 버튼형 라디오박스에서 checked value 값으로 박스 노출여부 판단 */}
              {discountRegist === '설정함' && discountOptSelect === 'all' && 
                <div className="subViewBox">
                  <ul>
                    <li>
                      <span className="tit"><span className="essential">전체할인</span></span>
                      <div className="cont">
                        <div className="regUnitRow">
                          <InputNum
                            width = {'200px'}
                            unit={'원'}
                          />
                          <span className="unitTxt">할인</span>
                        </div>
                        <div className="regUnitRow">
                          <Checkbox
                            objOpt={
                              [
                                {
                                  'optName' : '기간할인',
                                  'value' : 'periodDc'
                                },
                              ]
                            }
                            // checkIdx={0}
                            setState={setPeriodDc}
                          />
                        </div>
                        {
                          periodDc !== null && periodDc[0] === 'periodDc' &&
                          <div className="regUnitRow">
                            <PeriodSett
                              periodOpt={[3, 5, 7, 15, 30, 60, 90, 120]}
                              startDate={'2020-8-1'}
                              endDate={'2020-8-17'}
                            />
                          </div>
                        }
                      </div>
                    </li>
                    <li className="total">
                      <span className="tit"><span>할인가</span></span>
                      <div className="cont">
                        <div className="price">
                          <em>0</em>  원 (0원 할인)
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              }
              {discountRegist === '설정함' && discountOptSelect === 'pc' && 
                <div className="subViewBox">
                  <ul>
                    <li>
                      <span className="tit"><span>PC 할인</span></span>
                      <div className="cont">
                        <div className="regUnitRow">
                          <InputNum
                            width = {'200px'}
                            unit={'원'}
                          />
                          <span className="unitTxt">할인</span>
                        </div>
                        <div className="regUnitRow">
                          <Checkbox
                            objOpt={
                              [
                                {
                                  'optName' : '기간할인',
                                  'value' : 'periodDc'
                                },
                              ]
                            }
                            // checkIdx={0}
                            setState={setPeriodDc}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="total">
                      <span className="tit"><span>할인가</span></span>
                      <div className="cont">
                        <div className="price">
                          <em>0</em>  원 (0원 할인)
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              }
              {discountRegist === '설정함' && discountOptSelect === 'mo' && 
                <div className="subViewBox">
                  <ul>
                    <li>
                      <span className="tit"><span>모바일 할인</span></span>
                      <div className="cont">
                        <div className="regUnitRow">
                          <InputNum
                            width = {'200px'}
                            unit={'원'}
                          />
                          <span className="unitTxt">할인</span>
                        </div>
                        <div className="regUnitRow">
                          <Checkbox
                            objOpt={
                              [
                                {
                                  'optName' : '기간할인',
                                  'value' : 'periodDc'
                                },
                              ]
                            }
                            // checkIdx={0}
                            setState={setPeriodDc}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="total">
                      <span className="tit"><span>할인가</span></span>
                      <div className="cont">
                        <div className="price">
                          <em>0</em>  원 (0원 할인)
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              }
            </li>
            <li className="viewRow">
              <strong className="tit"><span>판매기간</span></strong>
              <div className="cont">
                <RadioButtonBox
                  objOpt={
                    [
                      {
                        'optName' : '설정함',
                        'value' : '설정',
                      },
                      {
                        'optName' : '설정안함',
                        'value' : '설정안함',
                      },
                    ]
                  }
                  groupName={'priceTax'}
                  checkIdx={1}
                  setState={setSellPeriod}
                />
                {
                  sellPeriod === '설정' &&
                  <div className="rowBox">
                    <PeriodSett
                      periodOpt={[3, 5, 7, 15, 30, 60, 90, 120]}
                      startDate={'2020-8-1'}
                      endDate={'2020-8-17'}
                    />
                  </div>
                }
              </div>
            </li>
            <li className="viewRow">
              <strong className="tit"><span className="essential">부가세</span></strong>
              <div className="cont">
                <RadioButtonBox
                  objOpt={
                    [
                      {
                        'optName' : '과세상품',
                        'value' : '과세',
                      },
                      {
                        'optName' : '면세상품',
                        'value' : '면세',
                      },
                      {
                        'optName' : '영세상품',
                        'value' : '영세',
                      },
                    ]
                  }
                  groupName={'priceTax'}
                  checkIdx={0}
                  setState={setPriceTax}
                />
              </div>
            </li>
          </ul>
        </div>
      </RegFoldItemBox>

      <RegFoldItemBox
        title={'재고수량'}
        essential={true}
      >

        <InputNum
          width = {'300px'}
          unit={'개'}
        />

      </RegFoldItemBox>

      <RegFoldItemBox
        title={'옵션설정'}
        essential={true}
      >

        <div className="viewWrap">
          <ul>
            <li className="viewRow">
              <strong className="tit">
                <span>선택형</span>
                <Tooltip>
                  {'옵션선택형 관련 도움말 팝업 내용영역'}
                </Tooltip>
              </strong>

              <div className="cont">
                <RadioButtonBox
                  objOpt={
                    [
                      {
                        'optName' : '설정함',
                        'value' : '설정함',
                      },
                      {
                        'optName' : '설정안함',
                        'value' : '설정안함',
                      }
                    ]
                  }
                  groupName={'setOptSet01'}
                  checkIdx={1}
                  setState={setOptSet01}
                />
              </div>

              {optSet01 === '설정함' && 
                <div className="subViewBox">
                  <ul>
                    <li>
                      <span className="tit"><span className="essential">옵션명 개수</span></span>
                      <div className="cont">
                        <Selectbox02
                          width = {'200px'}
                          defaultVal = {'1개'}
                          selectVal = {['1개', '2개', '3개', '4개']}
                        />
                      </div>
                    </li>
                    <li>
                      <span className="tit"><span className="essential">정렬순서</span></span>
                      <div className="cont">
                        <Selectbox02
                          // width = {'200px'}
                          defaultVal = {'낮은 가격순'}
                          selectVal = {['등록순', '가나다순', '높은 갸격순', '낮은 가격순']}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              }
            </li>
          </ul>
        </div>

      </RegFoldItemBox>

      <RegFoldItemBox
        title={'상품이미지'}
        essential={true}
      >

        <div className="viewWrap">
          <ul>
            <li className="viewRow">
              <strong className="tit">
                <span>대표이미지</span>
                <Tooltip>
                  {'대표이미지 등록 관련 도움말 팝업 내용영역'}
                </Tooltip>
              </strong>
              <div className="cont">

                <RegiImage />

              </div>
            </li>
            <li className="viewRow">
              <strong className="tit">
                <span>추가이미지</span>
                <Tooltip>
                  {'추가이미지 등록 관련 도움말 팝업 내용영역'}
                </Tooltip>
              </strong>
              <div className="cont">

                <RegiImage />

              </div>
            </li>
          </ul>
        </div>

      </RegFoldItemBox>
    
      <div className="fixedBtnBox">
        <div className="btnR">
          <button type="button" className="btnItemL03"><span>미리보기</span></button>
          <button type="button" className="btnItemL03"><span>임시저장하기</span></button>
          <button type="button" className="btnItemL02"><span>저장하기</span></button>
          <button type="button" className="btnItemL"><span>취소하기</span></button>
        </div>
      </div>
    </div>
  );
}

export default ProductReg;