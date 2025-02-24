/* eslint-disable */

import React from "react";
import { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  let post  = '강남 우동 맛집';
  let tit = 'title';
  let [글제목, setB] = useState(['남자 코트 추천','강남 우동맛집','제목3']); //자동 렌더링
  let [따봉 , setC] = useState([0,0,0]); 
  let [modal , setModal] = useState(false); //true 열림,false 닫힘

  let [인풋,setD] = useState('');

  [1,2,3].map(function(a){
    // map의 콜백함수는 array 자료 갯수만큼 반복 실행
    //console.log(a)
    return '123';
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4>연습블로그</h4>
      </div>
      {/* <h4 className={tit}>블로그 글 제목 - { post }</h4>
      <h4 style={{color:'red', fontSize : '16px'}}>블로그 글 제목 - { post }</h4> */
      // 클릭이벤트는 상위 html로 퍼짐(이벤트 버블링)
      // ex 좋아요클릭 -> h4 태그클릭(모달창 이벤트 ) -> div 클릭
      }
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        setB(copy);
      }}>글수정</button>

      <button onClick={() => {
         let copy = [...글제목].sort();  // ... 배열그대로 복사
         setB(copy);
      }}>가나다순정렬렬</button>

{/* 
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={() => {setC(따봉+1)}}>좋아요👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
            modal == true ? setModal(false) : setModal(true)   // == setModal(!modal)  ! -> 반대로 
         }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){ //i는 인덱스
          return(
            <div className='list' key={i}>
            <h4 onClick={() => { 
              setModal(!modal)
               }}> { a }<span onClick={(e) => { e.stopPropagation(); //이벤트 버블링 막기
                let copy = [...따봉]; 
                copy[i] = copy[i] + 1
                setC(copy)
                }}>좋아요👍</span> { 따봉[i] }
                <button  onClick={()=>{
                    setB(글제목.slice(i));

                    // 게시글 삭제 다른예시시
                    // let copy = [...글제목];
                    // copy.splice(i, 1);
                    // setB(copy);
                }}>삭제</button>  
            </h4> 
            <p>2월 17일 발행</p> 
          </div>
          )
         })
      }

      {
      // input type - text range checkbox date
      } 
      <input type="text" onChange={(e)=>{
        setD(e.target.value);
      }}/>
      <button onClick={()=>{
        setB([...글제목 , 인풋 ]);

        // 게시글 등록 다른예시 
        // let copy = [...글제목];
        // copy.unshift(인풋); //unshift - array 맨 앞에 자료 추가하는 문법
        // setB(copy)
      }}>추가</button>


      {
        modal == true ?  <Modal color={'skyblue'} 글제목={글제목} setB={setB} /> :  null  
        // 작명 ={ state이름 } <- 부모 state 사용하기( 보통 작명은 이름 똑같이함)
        // color = {'skyblue'} 는  color = 'skyblue'  도 가능  
      }
  
      {/* 동적 UI 만드는 step
        1. html css로 미리 디자인 완성
        2. ui 현재 상태를 state로 저장
        3. state에 따라 ui 어떻게 보일지 조건문(if문x 삼항연산자) 등으로 작성 
      */} 
    <Modal3 age={20}/>
    </div>
  );
}

//컴포넌트 방식 1
function Modal(props){ //첫글자 대문자 , 보통 파라미터 props 로 함 , 부모 -> 자식만 가능
  return(
    // 의미없는 <div> 대신 
    <>    
       <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[0]}</h4>  
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
            let copy = [...props.글제목];
            copy[0] = '여자 코트 추천';
            props.setB(copy);
          }}>글수정</button>
      </div>
    </>
  )
}

// 컴포넌트 방식 2
//const 는 에러로그를 나오게 한다
let Modal2 = () => {
  return(
    <>    
       <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

// 컴포넌트 방식 3 - Class 비주류 \
// constructor, super, render 기본템플릿
class Modal3 extends React.Component  { 
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕{ this.props.age }
        {/* <button onClick={()=>{
          this.setState({age:21})
        }}>버튼</button> 
        props 는 자식에서 수정할 수없음. this.state.age 사용 시 
        */}
      </div>
    )
  }
}

export default App
