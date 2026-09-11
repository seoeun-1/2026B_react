//리엑트 라이브러리 최초(렌더링)그리기 하는 함수
import { createRoot } from 'react-dom/client'
const root = document.querySelector('#root')
const create = createRoot(root);
import APP from './APP.jsx'
create.render(<APP> </APP>)
import MyMarKup from "./example/day01/MyMarKup.jsx";
create.render(<MyMarKup> </MyMarKup>)