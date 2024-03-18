/* 
  언어처럼 프로젝트 전체적으로 사용하는 데이터 = 전역데이터(global data)
  전역 데이터를 다룰 때 props와 state만 사용하면 props로 여러 번, 여러 곳에 내려줘야 함.
  = Prop Drilling(상위에서 하위로 반복해서 prop을 내려주는 상황)
  이를 방지하기 위해 context가 탄생. 
  context.provider라는 컴포넌트로 범위 지정 가능. 자손은 props없이도 사용.
  createContext로 만들 수 있다.
*/

import { createContext } from "react";

const LocaleContext = createContext();

export default LocaleContext;