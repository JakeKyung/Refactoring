
/**
 * 특정 조건이 참일때만 동작하는 코드 영역의 경우
 * 명시적으로 기술되어 있지 않는한 알고리즘 자체를 분석해보고
 * 테스트 해 본 뒤에 알아내야 하는 경우가 있다....피곤해진다.
 */

if (this.discountRate)
    base = base - (this.discountRate);

/** 
 * '반드시 조건이 참'이라고 가정하는 조건에 
 * assert 를 코드 자체해 삽입해놓자.! 
 * ※ assert 는 시스템에 영향을 주면 안되므로 assert 추가한다고 해서 동작이 달라지지 않는다.   
 */    
assert(this.discountRate > 0);
if (this.discountRate)
    base = base - (this.discountRate);  