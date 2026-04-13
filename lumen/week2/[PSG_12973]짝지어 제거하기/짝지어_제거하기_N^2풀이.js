function solution(s) {
    const n = s.length;
    // n이 홀수면 절대 모두 제거할 수 없음
    if (n % 2 !== 0) return 0;

    // dp[n][n] 배열 생성 (공간 복잡도 O(n^2))
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // 구간의 길이(len)를 2부터 n까지 2씩 증가시키며 확인
    for (let len = 2; len <= n; len += 2) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;

            // 1. 양 끝 문자가 같고 내부가 다 지워지는 경우
            if (s[i] === s[j]) {
                if (len === 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    continue;
                }
            }

            // 2. 중간 지점 k를 기준으로 두 구간으로 나뉘어 각각 지워지는 경우
            for (let k = i + 1; k < j; k += 2) {
                if (dp[i][k] && dp[k + 1][j]) {
                    dp[i][j] = true;
                    break;
                }
            }
        }
    }

    return dp[0][n - 1] ? 1 : 0;
}