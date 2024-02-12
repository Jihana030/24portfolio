function Button({children, onClick}){
    return <button onClick={onClick}>{children}</button>;
}

export default Button;
/*
 JSX 문법으로 컴포넌트를 작성 할 때 
 1. 어떤 정보를 전달할 때는 일반적인 props의 속성값을 주로 활용
 2. 화면에 보여질 모습을 조금 더 직관적인 코드로 작성하고자 할 때 children 값을 활용

 children을 활용하면 단순히 텍스트만 작성하는 걸 넘어서
 컴포넌트 안에 컴포넌트를 작성할 수도 있고
 컴포넌트 안에 복잡한 태그들을 더 작성할 수도 있다.
*/