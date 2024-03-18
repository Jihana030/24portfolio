/* 
  언어처럼 프로젝트 전체적으로 사용하는 데이터 = 전역데이터(global data)
  전역 데이터를 다룰 때 props와 state만 사용하면 props로 여러 번, 여러 곳에 내려줘야 함.
  = Prop Drilling(상위에서 하위로 반복해서 prop을 내려주는 상황)
  이를 방지하기 위해 context가 탄생. 
  context.provider라는 컴포넌트로 범위 지정 가능. 자손은 props없이도 사용.
  createContext로 만들 수 있다.
*/

import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ defaultValue = "ko", children }) {
  // provider에 기본 locale값을 지정하기 위해 defaultValue 추가
  const [locale, setLocale] = useState(defaultValue);
  // state값을 바꾸는 것도 반드시 context를 통해서 하기 위해 value에게 state 내려줌
  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

// 커스텀 hook(매번 useContext랑 localeContext를 가지고 사용하는건 번거로우니 대체제)
// locale값 전달 hook
export function useLocale() {
  const context = useContext(LocaleContext);

  // 커스텀 훅을 쓰면 이렇게 에러표시를 할 수 있다는 장점이 있음.
  if (!context) {
    throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다.');
  }

  return context.locale;
}

// setLocale값을 가져오는 hook
export function useSetLocale() {
  const context = useContext(LocaleContext);

  // 커스텀 훅을 쓰면 이렇게 에러표시를 할 수 있다는 장점이 있음.
  if (!context) {
    throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다.');
  }

  return context.setLocale;
}
