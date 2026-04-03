function solution(dirs) {
    let answer = 0;
    let x = 0, y = 0;
    const result = new Set()
    
    for (let dir of dirs) {

        let nx = x;
        let ny = y;

        if (dir === 'U') ny +=1
        if (dir === 'D') ny -=1
        if (dir === 'R') nx +=1
        if (dir === 'L') nx -=1 
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        const path = x < nx || (x === nx && y < ny) ? `${x},${y},${nx},${ny}` : `${nx},${ny},${x},${y}`
        x = nx;
        y = ny;
        result.add(path);
    }
    answer = result.size;
    
    return answer;
}