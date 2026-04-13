function solution(arr){
    const newArr = [...new Set(arr)];
    return newArr.sort((a,b) => b-a);
}