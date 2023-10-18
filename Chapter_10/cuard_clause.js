/**
 * 중첩 조건문을 보호 구문으로 바꾸기
 */

/** 
 * 개발을 하다 보면 가장 쉽게 볼수 있는 구조다. 
 * 추가 요구사항에 맞춰 새로운 조건문을 생성하고
 * if, else 가 과도하게 많아지는 경우다. 
 * 점차 가독성은 떨어질 수 밖에 없다.
 * - 함수의 진입점과 반환점은 하나라는 개념에 사로잡혀 반환점(result)에 집착한 결과다. 
*/
function getPayAmoint() {
    let result;
    if (isDead) 
        result = deadAmount();
    else {
        if (isSeparated) {
            result = separatedAmount();
        } else {
            if (isRetired)
                result = retireAdmount();
            else
                result = normalPayAmount();
        }
    }
}

/**
 * 보호 구문을 통한 조건문
 * 반환점은 하나라는 생각을 버리자.
 */
function getPayAmoint() {
    if (isDead) return deadAmount();
    if (isSeparated) return separatedAmount();
    if (isRetired) return retireAdmount();
    return normalPayAmount();
}