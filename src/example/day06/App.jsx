import { Route } from "react-router-dom";
import TopNavi from "./TopNavi";

export default function App(props){
    return (<>
    <TopNavi></TopNavi>
    <Route>
        <Route path="/" element={<UseRefExam1/>}/>
        <Route path="/use-ref1" element={<UseRefExam1/>}/>
        {/*<Route path="/use-ref2" element={<UseRefExam2/>}/>*/}
    </Route>
    </>)
}