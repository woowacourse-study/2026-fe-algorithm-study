const stack = [];
const maxSize = 10;

function push(stack, item) {
    stack.push(item);
    console.log('아이템이 추가 되었습니다.');
}

function pop(stack) {
    if (stack.length === 0) {
        console.log('스택이 비어 있습니다.');
        return null;
    }
    else {
        return stack.pop();
    }
}