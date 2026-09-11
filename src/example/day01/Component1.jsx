/*
    1.컴포넌트명은 .jsx 파일 생성한다
    2. export default
    3. {}안에 return에서는 
*/
function Footer(props){
    return <div>푸터구역</div>
}
function Header(props){
    return <div>헤더구역</div>
}
export default function Component1(props){
    return (<>
        <Header> </Header>
        <div>메인페이지</div>
        <Footer> </Footer>
    </>)
}