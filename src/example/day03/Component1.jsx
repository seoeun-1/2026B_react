//전통방식의 css 파일 import 'css파일경로' 또는 index.html 포함
import './index.css'
import logo from './assets/logo.jpg';

export default function Component1(props){
    //[3] css 객체 방식의 css 적용
    const myStyle = {
        color : 'white',backgroundColor:"DodgerBlue",
        padding : "10px",fontFamily: "궁서"
    } 
    const iWidth = { maxWidth : '300px'}
    return(<>
        <h2> 리액트 스타일 </h2>
        <ol>
            {/*[2]인라인방식의 css 적용, {key:value}*/}
            <li style={{color:"red"}}>프론트엔드</li>
            <ul>
                {/*[4]이미지 삽입하는 3가지 방법*/}
                <li> <img src="/img/logo.jpg" style={iWidth} /> </li>
                <li> <img src={logo} style={iWidth}/> </li>
                <li> <img/> </li>
            </ul>
            <li className="backEnd"> 벡엔드 </li>
            <ul>
                {/*[1]전통방식의 css파일로 적용*/}
                <li id="backEndsub"> java </li>
                <li class="warnings"> oracle </li>
                <li> jsp </li>
            </ul>
        </ol>
    </>)
}