-- 코드를 입력하세요
SELECT A.CATEGORY, SUM(B.SALES) AS TOTAL_SALES
FROM BOOK AS A
JOIN BOOK_SALES AS B
ON A.BOOK_ID = B.BOOK_ID
WHERE YEAR(B.SALES_DATE)=2022 AND MONTH(B.SALES_DATE)=1
GROUP BY A.CATEGORY
ORDER BY A.CATEGORY;

-- 2022년 1월의 카테고리 별 도서판매량을 합산 => 판매일을 살펴야 함
-- 카테고리, 총 판매량 리스트를 출력하는 SQL문을 작성
-- 결과는 카테고리명을 기준으로 오름차순 정렬