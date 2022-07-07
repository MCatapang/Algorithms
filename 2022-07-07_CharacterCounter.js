const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2c1d3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "b2c2";

function encode(charArr) {
    let arrMap = [];
    let index = -1;
    let output = "";

    for(let i=0; i<charArr.length; i++) {
        if(charArr[i] == charArr[i-1]) {
            arrMap[index][1] += 1;
        } else {
            index++;
            arrMap.push([charArr[i], 1]);
        }
    }

    for(const miniArr of arrMap) {
        output += `${miniArr[0]}${miniArr[1]}`;
    }

    return output;
}

// console.log(encode(str1));




const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    let output = "";
    let char = "";
    let num = "";
    for(let i=0; i<str.length+1; i++) {
        let intChar = parseInt(str[i]);
        if(isNaN(intChar) || intChar == null) {
            if(i == 0) {
                char = str[i]
            } else {
                output += char.repeat(num);
                char = str[i]
                num = "";
            }
        } else {
            num += str[i];
        }
    }
    return output;
}

console.log(decodeStr(two_str2));