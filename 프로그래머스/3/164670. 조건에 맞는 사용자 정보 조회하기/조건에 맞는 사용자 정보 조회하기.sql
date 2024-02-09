-- 코드를 입력하세요
-- USED_GOODS_BOARD와 USED_GOODS_USER 테이블에서 중고 거래 게시물을 3건 이상 등록한 사용자의 (V)
-- 사용자 ID, 닉네임, 전체주소, 전화번호를 조회하는 SQL문을 작성해주세요.(V) 
-- 이때, 전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력되도록 해주시고,(V) 
-- 전화번호의 경우 xxx-xxxx-xxxx 같은 형태로 하이픈 문자열(-)을 삽입하여 출력해주세요.(V) 
-- 결과는 회원 ID를 기준으로 내림차순 정렬해주세요. (V)


SELECT B.USER_ID, B.NICKNAME,
CONCAT(B.CITY, ' ', B.STREET_ADDRESS1, ' ', B.STREET_ADDRESS2) AS '전체주소',
CONCAT(SUBSTRING(B.TLNO,1,3), '-', SUBSTRING(B.TLNO,4,4), '-', 
       SUBSTRING(B.TLNO,8,4)) AS '전화번호'
FROM USED_GOODS_BOARD AS A
JOIN USED_GOODS_USER AS B
ON A.WRITER_ID = B.USER_ID
GROUP BY B.USER_ID
HAVING COUNT(B.USER_ID)>=3
ORDER BY B.USER_ID DESC;