import { useEffect, useRef } from "react";

// 파일 인풋은 반드시 비제어 인풋으로 만들어야함
// 해킹 위험때문에 js에서 파일 인풋의 값은 사용자만이 바꿀 수 있음.
// = fileInput은 value prop을 지정할 수 없음.
function FileInput({ name, value, onChange }) {
  // 실제 DOM노드를 볼 수 있는 useRef
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  // useEffect(() => {
  //   // 조건에 따라 컴포넌트가 사라지는 경우 없을 수도 있어서 if문으로 사용하는 걸 권장
  //   if (inputRef.current) {
  //     console.log(inputRef.current);
  //   }
  // }, []);

  return <input type="file" onChange={handleChange} ref={inputRef} />;
}

export default FileInput;
