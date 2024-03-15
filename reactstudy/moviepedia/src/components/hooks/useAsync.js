// 커스텀 훅은 리액트 훅을 실행하는 함수(use로 시작하는 이름의 규칙을 따라야함)

import { useState } from "react";

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
    try {
      setError(null);
      setPending(true);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  };

  return [pending, error, wrappedFunction];
}

export default useAsync;
