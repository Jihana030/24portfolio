import {useState} from 'react'; //state는 불러와서 써야함.
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  // [state값, setter함수(state값 변경, setter함수로만 가능)] = useState(초기값)

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  }

  const handleClearClick=()=>{
    setNum(1);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color='red' num={num}/>
    </div>
  );
}

export default App;

/* 
  속성에 숫자도 중괄호로 감싸줘야함 
  단순히 보여주기만 할 때는 children prop(문자열, 컴포넌트, 다른 태그)을 활용하는게 좋다.
  
*/