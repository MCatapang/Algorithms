/*
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word.
Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
    let strArr = str.split(" ");
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    let outputArr = [];
    strArr.forEach( s => {
        if(s.match(regex)) {
            console.log("match!");
            outputArr.push(s);
        } else {
            outputArr.push(s.slice(1, s.length) + s[0] + "ay");
        }
    })
    return outputArr.join(" ");
}

console.log(pigIt("Pig latin is cool"));