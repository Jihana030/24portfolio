import { getReviews } from "../api";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  // 처음 랜더링 될 때 리퀘스트를 보내고 싶다면 useEffect
  // useEffect(() => {
  //   handleLoad();
  // }, []);
  /* 
  useEffect함수는 맨 처음 랜더링이 끝나면 콜백함수(handleLoad)를 실행.
  그 다음부터는 디펜던시 리스트([])를 비교, 값이 다른 경우에만 콜백을 실행.
  */
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && <button onClick={handleLoadMore}>더 보기</button>}
      {/* 
          <논리연산자 &&>
          hasNext값이 거짓이면 식을 계산하지않고 앞의 조건인 hasNext의 값을 사용. ..?
          hasNext값이 false이기 때문에 리액트가 렌더링하지 않음 = 버튼이 보이지않게 됨
          앞의 값이 true면 렌더링, false면 렌더링하지 않음.

          <||>
          앞의 값이 true면 렌더링하지 않고, false면 렌더링

          <삼항연산자>
          ex ? A : B 일 때, ex가 true라면 A를, false라면 B를 렌더링

          <렌더링되지 않는 값>
          null, undefined, true, false, '', []
      */}
    </div>
  );
}

export default App;
