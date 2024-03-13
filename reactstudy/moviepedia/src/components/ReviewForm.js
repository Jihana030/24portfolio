import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import { createReviews } from "../api";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({onSubmitSuccess}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('rating', values.rating);
    formData.append('content', values.content);
    formData.append('imgFile', values.imgFile);

    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await createReviews(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    onSubmitSuccess(review);
    // 리퀘스트가 끝나면 폼 초기화
    setValues(INITIAL_VALUES);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FileInput name='imgFile' value={values.imgFile} onChange={handleChange}/>
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput name="rating" type="number" value={values.rating} onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      <button type="submit" disabled={isSubmitting}>확인</button>
      {submittingError?.message && <div>{ submittingError.message }</div>}
    </form>
  );
}
// 리액트에서의 onChange는 onInput처럼 값을 입력할때마다 이벤트 발생(원래는 값 입력이 끝나면 발생)
// onChange가 더 직관적인 이름 같아서 이렇게 개발했다고.
export default ReviewForm;
