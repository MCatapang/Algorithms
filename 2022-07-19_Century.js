/*
    Given a year, return the century it is in. 
    The first century spans from the year 1 up to and 
    including the year 100, the second - from the year 
    101 up to and including the year 200, etc.

    Example

    For year = 1905, the output should be
    solution(year) = 20;
    For year = 1700, the output should be
    solution(year) = 17.
*/

// Extensive Solution
function solution(year) {
    const yearStr = String(year);
    const digitStrArr = yearStr.split("")
    let outputStr = "";
    
    for(let i=0; i<yearStr.length-2; i++) {
        outputStr += digitStrArr[i];
    }
    
    let holder = "";
    holder += digitStrArr[yearStr.length-2];
    holder += digitStrArr[yearStr.length-1];
    const condition = Number(holder);
    
    return condition > 0 || isNaN(condition) ? 
        Number(outputStr) + 1 :
        Number(outputStr) ;
}

// Shortened Solution
function solution(year) {
    return Math.ceil(year / 100);
}