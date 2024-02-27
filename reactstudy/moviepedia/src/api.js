// 리퀘스트 함수들을 모아 놓고 사용

// fetch를 호출하고 받아온 리스폰스 body를 리턴하는 함수
export async function getReviews(order = 'createdAt') {
    const query = `order=${order}`
    const response = await fetch(`https://learn.codeit.kr/api/film-reviews?${query}`);
    const body = await response.json();
    return body;
}