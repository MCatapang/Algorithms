// Solution 1
function twoSums1(array, target) {
    for(let i=0; i<array.length; i++) {
        for(let j=(i+1); j<array.length; j++) {
            if((array[i] + array[j]) == target){
                return ([i, j]);
            }
        }
    }
    return ("Sorry there's no solution");
}

// Solution 2
function twoSums2(nums, target) {
    for(let i=0; i<nums.length; i++) {
        let restOfNums = nums.slice(i+1, nums.length);
        let otherNum = target-nums[i];

        if(restOfNums.includes(otherNum)) {
            return [i, restOfNums.indexOf(otherNum) + i + 1]
        }
    }
}

console.log(twoSums1([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums1([3, 2, 4], 6)); // [1,2]
console.log(twoSums1([3, 3], 6)); // [0,1]