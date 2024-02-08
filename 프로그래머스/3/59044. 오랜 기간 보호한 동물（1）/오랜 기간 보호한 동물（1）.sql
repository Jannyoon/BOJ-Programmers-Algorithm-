-- 코드를 입력하세요
SELECT A.NAME, A.DATETIME
FROM ANIMAL_INS AS A
LEFT JOIN ANIMAL_OUTS AS B
ON A.ANIMAL_ID=B.ANIMAL_ID
WHERE B.ANIMAL_ID IS NULL
ORDER BY DATETIME
LIMIT 3;



-- 아직 입양을 못 간 동물 중 => 상태 체크
-- 가장 오래 보호소에 있던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문 
-- =>이거 어케 하지
-- 결과는 보호 시작일 순으로 조회