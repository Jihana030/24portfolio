import { useState } from 'react';  //state는 불러와서 써야함.
import Button from './Button';
import Dice from './Dice';

function random(n) {
    return Math.ceil(Math.random() * n);
}

function Board({name, color}) { //f2로 이름을 바꾸면 파일 내 동일이름이 모두 바뀐다.
    const [num, setNum] = useState(1);
    // [state값, setter함수(state값 변경, setter함수로만 가능)] = useState(초기값)
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
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
    }

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>{name}</h2>
                <Dice color={color} num={num} />
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default Board;
/* 
  속성에 숫자도 중괄호로 감싸줘야함 
  단순히 보여주기만 할 때는 children prop(문자열, 컴포넌트, 다른 태그)을 활용하는게 좋다.
*/
/*
  state
  setter함수를 활용해서 이벤트 핸들러를 등록해두면, 이벤트가 발생할 때마다 리랜더링
*/