import { useState } from 'react';  //state는 불러와서 써야함.
import Button from './Button';
import Board from './Board';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {

  // state lifting : 자식 컴포넌트의 state를 부모 컴포넌트로 올려주는 것
  // '나'의 숫자
  const [myHistory, setMyHistory] = useState([]);

  // '상대'의 숫자
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name='나' color='blue' gameHistory={myHistory} />
        <Board name='상대' color='red' gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
