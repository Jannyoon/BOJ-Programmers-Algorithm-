-- CAR_RENTAL_COMPANY_RENTAL_HISTORY 테이블에서 
-- 대여 시작일을 기준으로 2022년 8월부터 2022년 10월까지 (V) 
-- 총 대여 횟수가 5회 이상인 자동차들에 대해서 (V)  => 이 자동차의 리스트를 따로 뽑기 위해 서브 쿼리 작성
-- 해당 기간 동안의 월별 자동차 ID 별 총 대여 횟수(컬럼명: RECORDS) 리스트를 출력하는 SQL문을 작성해주세요.(V) 
-- 결과는 월을 기준으로 오름차순 정렬하고,(V) 
-- 월이 같다면 자동차 ID를 기준으로 내림차순 정렬해주세요. 
-- 특정 월의 총 대여 횟수가 0인 경우에는 결과에서 제외해주세요.(V)

SELECT MONTH(START_DATE) AS MONTH, CAR_ID, COUNT(*) AS RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE START_DATE>='2022-08-01' AND START_DATE<='2022-10-31'
AND CAR_ID IN 
-- 총 대여 횟수가 5회 이상인 자동차
(
    SELECT CAR_ID
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE START_DATE>='2022-08-01' AND START_DATE<='2022-10-31'
    GROUP BY CAR_ID
    HAVING COUNT(CAR_ID)>=5
    ORDER BY CAR_ID
)
GROUP BY MONTH, CAR_ID
HAVING RECORDS>0
ORDER BY MONTH, CAR_ID DESC;