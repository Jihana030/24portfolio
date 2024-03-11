import { useEffect, useRef, useState } from "react";

// 파일 인풋은 반드시 비제어 인풋으로 만들어야함
// 해킹 위험때문에 js에서 파일 인풋의 값은 사용자만이 바꿀 수 있음.
// = fileInput은 value prop을 지정할 수 없음.
// 이를 이용해 value를 빈 문자열로 만들면 인풋을 초기화 할 수 있음.
function FileInput({ name, value, onChange }) {
  // 실제 DOM노드를 볼 수 있는 useRef
  const inputRef = useRef();
  // 이미지 미리보기 기능
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = (e) => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null); //부모 컴포넌트에서 imgFile 값이 null로 변경
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value); //objectURL은 문자열을 리턴. 파일 주소처럼 쓸 수 있음.
    // objectURL을 만들면 브라우저는 메모리를 할당, 파일에 해당하는 주소를 만들어줌.
    // 이는 외부의 상태를 바꾸는 것으로 사이드이펙트(side effect)라고 함.
    // 사이드 이펙트는 주로 useEffect로 구현
    setPreview(nextPreview);

    return () => {
      //할당한 메모리를 해제도 해줘야 함. 여기서 사이드 이펙트를 정리할 수 있음.
      setPreview();
      URL.revokeObjectURL(nextPreview); //앞에서 만든 objectURL 해제.
    };
  }, [value]); //파일을 선택할 때마다 미리보기 주소가 바뀌도록
  //useEffect가 실행될 때 정리함수는 기억해둠. 디펜더시가 작동할 때 기억 한 정리함수를 실행 후 작동.

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input type="file" accept="image/png, image/jpeg" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
