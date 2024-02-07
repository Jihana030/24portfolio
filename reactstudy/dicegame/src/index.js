import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>,
  document.getElementById('root')
);

/*
  className
  htmlFor
  속성이름은 카멜케이스로.
  JSX는 self-closing 필수
  부모 하나 안에 모든 jsx 코드가 있어야함.
  Fragment를 활용하면, 혹은 빈 부모태그를 사용하면 부모가 불필요할때 보이지않게 할 수 있다.
  이벤트 핸들러는 onclick 사용. 중괄호로 함수명 사용.
  중괄호 안에는 변수만 사용가능. for문이나 if문 사용 불가.
  컴포넌트는 대문자로 시작, 내부는 JSX문법이어야함.
  이미지를 데려올때는 import diceBlue01 from './assets/dice-blue-1.svg';
  컴포넌트의 속성 = props(프로퍼티에서 따온 말)
*/