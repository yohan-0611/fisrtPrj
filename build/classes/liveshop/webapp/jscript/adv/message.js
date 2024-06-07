/**
 * 이건 message 모듈입니다.
 */
const message = () =>{
	const name = '고요한';
	const age = 22;
	return name + " 은 " + age + "살입니다.";
}

//모듈을 export 할때 모듈명을 기본(default) 로 사용합니다.
//그래서 문법은 export default 함수명; 이런식으로 합니다.

export default message;