-- 이 서비스에서는 공간을 둘 이상 등록한 사람을 "헤비 유저"라고 부릅니다. !!이걸 확인해야 함
-- 헤비 유저가 등록한 공간의 정보를 아이디 순으로 조회하는 SQL문을 작성해주세요.
-- 코드를 입력하세요

-- 헤비 유저만 모여놓기(공간을 소유한 유저의 아이디 : HOST_ID)

SELECT *
FROM PLACES
WHERE HOST_ID IN
(
    SELECT HOST_ID
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(HOST_ID)>=2
    ORDER BY HOST_ID
)
ORDER BY ID;