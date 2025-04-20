function solution(price, money, count) {
    let wallet = money;
    for (let i =1; i<=count; i++) {
        wallet -=price * i; 
    } 
    return wallet < 0 ? Math.abs(wallet) : 0;
}