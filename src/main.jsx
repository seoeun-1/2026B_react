//[필수] 1. 리액트 라이브러리 최초 렌더링(그리기)하는 함수
import { createRoot } from "react-dom/client";
//[필수] 2. index.html 에서 root 마크업 가져오기 , #ID , .Class
const root = document.querySelector( '#root' )
//[필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot( root );
// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 렌더링
// 1. import 이용하여 컴포넌트 가져온다. 
// import App from './App.jsx'
// 2. 가져온 컴포넌트 렌더링하기
// create.render( <App> </App> )
// [day01] 
//import MyMarkup from "./example/day01/MyMarKup";
//create.render( <MyMarkup> </MyMarkup>)

//import Component1 from "./example/day01/Component1";
//create.render(<Component1></Component1>)

//import Component2 from "./example/day01/Component2";
//create.render(<Component2></Component2>)

//import Component3 from "./example/day03/Component3";
//create.render(<Component3></Component3>)

import Practoce3 from "./example/practice3/Practice3";
create.render(<Practoce3 ></Practoce3>)

// // [day04]
// import { BrowserRouter } from "react-router-dom"; // 1. 라우터 라이브러리 가져오기
// import App from "./example/day04/App";
// // 2. 최초 렌더링 되는 컴포넌트 앞뒤로 라우터컴포넌트 감싼다.
// create.render( 
//     <BrowserRouter> 
//         <App /> 
//     </BrowserRouter>  
// )