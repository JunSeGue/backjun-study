function solution(numbers, hand) {

    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        0: [3, 1]
    };
    
    let LPos = [3,0];
    let RPos = [3,2];
    let result = "";
    
    const getDistance = (pos1, pos2) => Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    
    const click = (number) => {
        const pos = keypad[number];
        const LDistance = getDistance(LPos, pos);
        const RDistance = getDistance(RPos, pos);
        
        if(number % 3 === 1) {
            return "L"
        } else if(number %3 === 0 && number !== 0){
            return "R"
        } else {
            return LDistance < RDistance ? "L" : 
                    LDistance > RDistance ? "R" : 
                    hand === "left" ? "L" : "R";
        }
        
    }
    
    for (let number of numbers) {
        const clickedDir = click(number);
        result += clickedDir;
        
        if (clickedDir === 'L') {
            LPos = keypad[number];
        } else {
            RPos = keypad[number];
        }
    }
    
    return result;
}
