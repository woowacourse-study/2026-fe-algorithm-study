function solution(answers) {
    const answer = [];
    let cnt = [0,0,0];

    const patterns = [
          [1, 2, 3, 4, 5],
          [2, 1, 2, 3, 2, 4, 2, 5],
          [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
      ];
    
    for (let i = 0; i<answers.length; i++) {
        for (let z = 0; z <3; z ++){
            if (answers[i] === patterns[z][i%patterns[z].length]){
                cnt[z]++
            } 
        }
    }
    let max = Math.max(...cnt);
    cnt.forEach((n,i)=>{
        if(n === max) answer.push(i+1);
    })
    return answer;
}

