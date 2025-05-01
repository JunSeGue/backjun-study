function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((value, j) => value + arr2[i][j]))
}