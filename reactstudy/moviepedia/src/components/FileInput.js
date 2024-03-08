import { useRef } from "react";

// 파일 인풋은 반드시 비제어 인풋으로 만들어야함
// 해킹 위험때문에 js에서 파일 인풋의 값은 사용자만이 바꿀 수 있음.
// = fileInput은 value prop을 지정할 수 없음.
// 이를 이용해 value를 빈 문자열로 만들면 인풋을 초기화 할 수 있음.
function FileInput({ name, value, onChange }) {
  // 실제 DOM노드를 볼 수 있는 useRef
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = (e) => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null); //부모 컴포넌트에서 imgFile 값이 null로 변경
  }

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
