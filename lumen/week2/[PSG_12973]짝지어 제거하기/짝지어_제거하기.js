function solution(inputString) {
    const stack = [];

    for (let i = 0; i < inputString.length; i++) {
        // 스택의 최상위 값과 문자열의 현재 값과 비교한다.
        if (stack.length > 0 && stack[stack.length - 1] === inputString[i]) {
            stack.pop(); 
            // 비교해서 현재 문자와 스택의 최상위 문자열이 맨 위 문자 제거
        } else {
            stack.push(inputString[i]);
            // 스택에 현재 문자 추가 
        }
    }

    return stack.length === 0 ? 1 : 0;
}