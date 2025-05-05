function solution(babblings) {
    const talk = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let i = 0; i < babblings.length; i++) {
        let word = babblings[i];

        // 연속된 같은 발음이 포함되면 제외
        if (talk.some(sound => word.includes(sound + sound))) continue;

        // 발음 가능한 단어들을 공백으로 대체
        for (let sound of talk) {
            word = word.replaceAll(sound, " ");
        }

        // 공백을 모두 제거한 결과가 빈 문자열이면 유효한 단어로 간주
        if (word.trim() === "") count++;
    }

    return count;
}
