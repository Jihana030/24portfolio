import { getReviews } from "../api";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      result = await getReviews(options);
    } catch (error) {
      console.error(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { reviews, paging } = result
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      // setItems([...items, ...reviews]);
      // 이렇게 쓰면 더보기 버튼 클릭 후 삭제버튼을 눌러 목록 하나를 지웠을 경우,
      // 지운 것을 모르고 이전 시점의 목록으로 불러와 삭제되지 않는 것 같은 버그가 발생
      setItems((prevItems) => [...prevItems, ...reviews]);
      // 이렇게 prev 파라미터로 현재 시점의 데이터를 전송하도록 해야 한다. (콜백 사용)
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
      {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더 보기</button>}
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
