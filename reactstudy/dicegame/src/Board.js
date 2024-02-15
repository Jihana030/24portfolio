import Dice from './Dice';

function Board({ name, color, gameHistory }) { //f2로 이름을 바꾸면 파일 내 동일이름이 모두 바뀐다.
    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);
    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
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