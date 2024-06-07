/**
 * Math.random()*(최대값-최소값)+ 최소값        랜덤 범위값 추출 
 */
let a = 0;
function getRandom(num1, num2) {
	if (num1 === undefined && num2 === undefined) {
		a = Math.round(Math.random() * 99) + 1;
	}
	else if (num2 === undefined) {
		a = Math.round(Math.random() * num1 ) + 1;
	}
	else {
		a = Math.round(Math.random() * (num2 - num1 + 1)) + num1;
	}
	return a;
}
/*이 함수는 랜덤값을 리턴하도록 정의되어야 합니다.
	단, 조건은 다음과 같습니다.
	파라미터의 값이 하나도 없을 때는 기본 랜덤값을 요청한다라고 가정해서
	1~100 사이의 값을 리턴,
	만역 파라미터가 나만 존재할때는 1부터 그 값까지의 범위내의 랜덤값을 리턴
	만약 파라미터가 모두 존재한다면 num1~num2 사이 범위내의 랜덤값을 리턴시킵니다.
    
	함수의 라인이 몇만라인이더라 하더라도, 코드 중에 return을 만나면
	함수는 거기서 명시적으로 끝나버립니다.*/