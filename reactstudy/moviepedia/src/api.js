// 리퀘스트 함수들을 모아 놓고 사용

// fetch를 호출하고 받아온 리스폰스 body를 리턴하는 함수
export async function getReviews({order = 'createdAt', offset = 0, limit = 6}) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`
    const response = await fetch(`https://learn.codeit.kr/api/film-reviews?${query}`);
    if (!response.ok) {
        throw new Error('리뷰를 불러오는데 실패했습니다.');
    }
    const body = await response.json();
    return body;
}