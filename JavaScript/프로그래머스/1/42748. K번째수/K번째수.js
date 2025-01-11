// refactor code
function solution(array, commands) {
    return commands.map(command => {
        let [start , end, position] = command;
        let sortedArray = array.slice(start -1, end).sort((a,b) => a-b);
        return sortedArray[position -1];
    });
}