function plus(x,y){}
plus(3,4)

function plus2(props){}
plus2({v1:3 , v2:4})

export default function Component3 (props){
    let name = "유재석";
    return(<>
        {/*JSX주석*/}
        <div> {name}</div> <div>{10+20}</div>
        < input type="text" value="안녕" name="입력상자"/>
        <SubComp1 name="유재석" age = "40"/>
    </>)
}

function SubComp1(props){
    console.log(props);
    return(<>
        <h4>{props.name}님 {props.age}세</h4>
    </>)
}

function SubComp2({name,age}){
    return(<>
        <h4>{name}님 {age}세</h4>
    </>)
}
