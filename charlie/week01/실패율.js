function solution(N, stages) {
    let answer = [];
    let totalPerson = stages.length
    let failPerson = [];
    let failureRate = [];    
    
    for(let i = 1; i<N+1; i++){
        failPerson.push((stages.filter((n) => n === i)).length);
    }

    let firstFailureRate = {stage:1,rate:failPerson[0]/(totalPerson)}
    failureRate.push(firstFailureRate);

    for (let i =1; i<failPerson.length; i++){
        totalPerson -= failPerson[i-1];
        failureRate.push({stage:i+1, rate:failPerson[i]/totalPerson})
    }
    
    const result = failureRate.sort((a,b) => b.rate - a.rate);
    result.forEach(n => answer.push(n.stage));
    
    return answer;
}

// AI 개선 코드 (시간복잡도 감소)
// function solution(N, stages) {
//       let totalPerson = stages.length;
//       let failPerson = Array(N + 1).fill(0);

//       for (let i = 0; i < stages.length; i++) {
//           if (stages[i] <= N) failPerson[stages[i]]++;
//       }

//       let failureRate = [];
//       for (let i = 1; i <= N; i++) {
//           failureRate.push([i, failPerson[i] / totalPerson]);
//           totalPerson -= failPerson[i];
//       }

//       return failureRate
//           .sort((a, b) => b[1] - a[1])
//           .map(n => n[0]);
//   }
