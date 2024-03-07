
// 파일 인풋은 반드시 비제어 인풋으로 만들어야함
// 해킹 위험때문에 js에서 파일 인풋의 값은 사용자만이 바꿀 수 있음.
// = fileInput은 value prop을 지정할 수 없음.
function FileInput({name, value, onChange}) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
