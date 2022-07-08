/*
Given an array of non-unique items 
(e.g., [1, 1, 2, 3, 4, 4, 2, 2,] or [95, 96, 97, 99, 96, 97]) 
and a given number of items that must be removed from the array
e.g., 3 items, 9 items), determine the fewest number of 
unique items you can have in the array after the removal.
*/

function leastUnique(arr, numRemove) {
    let hashMap = {};
    for(let i=0; i<arr.length; i++) {
        hashMap.hasOwnProperty(arr[i])
            ? hashMap[arr[i]]++
            : hashMap[arr[i]] = 1;
    }

    let itemArr = Object.entries(hashMap).sort((a,b) => a[1]-b[1]);
    while(numRemove > 0) {
        itemArr[0][1]--;
        numRemove--;
        if(itemArr[0][1] <= 0) {
            itemArr.shift();
        }
    }
    
    return itemArr.length;
}

console.log(leastUnique([1,1,1,2,2,45,8,3,5], 3));