import { useState } from "react";

function ReviewForm() {
  // 리액트에서 input은 state로 관리.
  // state의 값과 input의 값을 동일하게 만드는 게 핵심. = 제어컴포넌트

  // 영화 제목을 받을 state
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    // input의 value가 변경될 때마다 그 값을 state에 반영
    setTitle(e.target.value);
  };

  return (
    <form>
      <input value={title} onChange={handleTitleChange}></input>
    </form>
  );
}
// 리액트에서의 onChange는 onInput처럼 값을 입력할때마다 이벤트 발생(원래는 값 입력이 끝나면 발생)
// onChange가 더 직관적인 이름 같아서 이렇게 개발했다고.
export default ReviewForm;
