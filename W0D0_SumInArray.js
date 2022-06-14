/*
    Given an array of N elements, check if it possible to obtain a sum of S,
    by choosing some of the elements in the array and adding them.

    Input Format: (N, nArr, S)
    Input Sample: (5, [3,2,0,7,-1], 8)
*/

function testCases(N, nArr, S) {
    let currentSum = 0;
    let valuesAdded = 0;
    let output = "NO";
    for(let i=0; i<N; i++) {
        for(let j=i; j<N; j++) {
            let restOfArrayHasValue = nArr.slice(nArr[j], N).includes(S-currentSum);
            if((currentSum == S && valuesAdded < 2) || restOfArrayHasValue) {
                currentSum = 0;
                valuesAdded = 0;
                output = "YES";
                break;
            } else if (currentSum > S) {
                currentSum = 0;
                valuesAdded = 0;
                break;
            } else {
                currentSum += nArr[j];
                valuesAdded++;
            }
        }
    }
    return output;
}

console.log(testCases(5, [3, 2, 0, 7, -1], 8));
console.log(testCases(3, [-1, 3, 3,], 4));
console.log(testCases(3, [4, -5, 1], 5));