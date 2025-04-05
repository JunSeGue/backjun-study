function solution(n) {
    let sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false; 

    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve.filter(isPrime => isPrime).length;
}
