import Button from './Button';
import Dice from './Dice';

function App() {
  return (
    <div>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color='red' num={2}/>
    </div>
  );
}

export default App;

/* 
  속성에 숫자도 중괄호로 감싸줘야함 
  단순히 보여주기만 할 때는 children prop(문자열, 컴포넌트, 다른 태그)을 활용하는게 좋다.
*/