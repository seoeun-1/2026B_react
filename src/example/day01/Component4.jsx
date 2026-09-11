function FrontComp(props){
    const liRows = [];
    for(let i=0 ; i<props.propData1.length ; 1++){
        liRows.push(
            <li key={i}>{propData1[i]}</li>
        );
    }
    return (<>
        <li>{props.frTitle}</li>
        <ul>
            {liRoews}
        </ul>
    </>)
}
const BackComp = ({propData2, baTitle}) => {
    const liRows = [];
    let keyCnt=0;
    for(let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        );
    }
    return(<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
function App(){
    
}