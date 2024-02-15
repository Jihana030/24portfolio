import { useState } from 'react';  //state는 불러와서 써야함.
import Button from './Button';
import Board from './Board';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {

  // state lifting : 자식 컴포넌트의 state를 부모 컴포넌트로 올려주는 것
  // '나'의 숫자
  const [num, setNum] = useState(1);
  // [state값, setter함수(state값 변경, setter함수로만 가능)] = useState(초기값)
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  // '상대'의 숫자
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    // gameHistory.push(nextNum);
    // setGameHistory(gameHistory);
    /*
    배열은 참조형이기 때문에 주솟값을 가져온다. 
    즉, 기존 주소가 변경되지 않으면(혹은 값이 변경되지않으면) 리액트는 리랜더링해주지않는다.
    따라서 위의 setGameHistory를 쓰면 안되고
    아래처럼 spread를 쓰던지해야한다.(메소드, 할당연산자 X) 반드시 새로운 값으로.
    */
    setGameHistory([...gameHistory, nextNum]);

    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  }

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);

    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name='나' color='blue' num={num} sum={sum} gameHistory={gameHistory} />
        <Board name='상대' color='red' num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
