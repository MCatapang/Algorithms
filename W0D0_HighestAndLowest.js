/*
In this little assignment you are given a string of 
space separated numbersArr, and have to return the 
highest and lowest number.

Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes

All numbersArr are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbersArr separated by a single space, 
and highest number is first.
*/

function highAndLow(numbers) {
    let numbersArr = numbers.split(" ").map(numberStr => {
        return Number(numberStr);
    });;
    console.log(numbersArr);
    let high = numbersArr[0];
    let low = numbersArr[0];
    for(let i=0; i<numbersArr.length; i++) {
        if(numbersArr[i] > high) {
            high = numbersArr[i];
        }
        if(numbersArr[i] < low) {
            low = numbersArr[i];
        }
    }
    return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));