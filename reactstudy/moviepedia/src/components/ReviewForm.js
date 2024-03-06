import { useState } from "react";

function ReviewForm() {
  // 리액트에서 input은 state로 관리.
  // state의 값과 input의 값을 동일하게 만드는 게 핵심. = 제어컴포넌트

  // 영화 제목을 받을 state
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    // input의 value가 변경될 때마다 그 값을 state에 반영
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    // form의 기본 동작은 submit 버튼을 눌렀을때 입력 폼의 값과 함께 get 리퀘스트를 보내는 것
    // 따라서 기본 동작을 막아줘야만 새로고침 하지 않음.
    e.preventDefault();
    console.log({
      title,
      rating,
      content,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">확인</button>
    </form>
  );
}
// 리액트에서의 onChange는 onInput처럼 값을 입력할때마다 이벤트 발생(원래는 값 입력이 끝나면 발생)
// onChange가 더 직관적인 이름 같아서 이렇게 개발했다고.
export default ReviewForm;
