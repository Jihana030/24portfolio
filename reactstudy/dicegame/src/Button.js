import './Button.css'

function Button({ children, onClick, color = 'blue', className ='' }) {
    // const style = color === 'red' ? redButtonStyle : blueButtonStyle;
    const classNames = `Button ${color} ${className}`; //여기서는 두가지 클래스를 주고있어서 공백있음
    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
/*
 JSX 문법으로 컴포넌트를 작성 할 때 
 1. 어떤 정보를 전달할 때는 일반적인 props의 속성값을 주로 활용
 2. 화면에 보여질 모습을 조금 더 직관적인 코드로 작성하고자 할 때 children 값을 활용

 children을 활용하면 단순히 텍스트만 작성하는 걸 넘어서
 컴포넌트 안에 컴포넌트를 작성할 수도 있고
 컴포넌트 안에 복잡한 태그들을 더 작성할 수도 있다.

 react에서 css나 이미지를 불러오는 것은 create react app이라는 프로그램이 대신 설정해 준 기능
 이미지 : import 사용할이름 from '경로';
 스타일 : import '경로';
 인라인스타일 : const style = {} *camel case로 작성
 className prop에 문자열로 클래스명을 넣어주면 됨. 재사용성을 위해 부모 컴포넌트에서 받으면 더 좋다.
 className 라이브러리 : npm install classnames
*/