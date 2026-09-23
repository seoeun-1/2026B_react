import axios from "axios";
import { useState, useEffect } from "react";

function Randomuser(props){
    const [myJSON, setMyJSON] = useState({results:[]});
    useEffect(async function(){
        const response = await axios.get("https://api.randomuser.me?results=10");
        const data = response.data;
        setMyJSON(data);
    }, []);   

    let trTag = myJSON.results.map((data) => {
        return (
            <tr key={data.logon.md5}>
                <td><img src={data.picture.thumbnail} alt={data.login.username}/></td>
                <td><a href='/' onClick={(e)=>{
                    e.preventDefault();
                    props.onProfile(data);
                }}>{data.login.username}</a>
                </td>
                <td>{data.name.title} {data.name.first} {data.name.last} </td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });
    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );

    function ExternalApiFetcher(props) {
        return (<>
            <h2>외부 서버 통신</h2>
            <Randomuser onProfile={(sData)=>{
                console.log(sData);
                let info = `전화번호:${sData.cell}
    성별:${sData.gender}
    username:${sData.login.username}
    password:${sData.login.password}`;
            alert(info);
        }}></Randomuser>
        </>);
    }
}

/*
    axios란? 주로 API 비동기통신
    -주로 외부API와 백엔드API(controller) 통신 도구
    -content-type 기본값이 application/json
    1. 사용법
        const 함수명 = async( ) => {
            const response = await axios.HTTP메소드명("통신할주소?쿼리스트링" , {body}); 
            const data = respnonse.data
        }
*/