function maskify(cc) {
    let outputStr = "";
    for (let i = 0; i < cc.length; i++) {
        if (i >= cc.length - 4) {
            outputStr += cc[i];
        } else {
            outputStr += "#";
        }
    }
    return outputStr;
}

let str1 = "127371289371231212979731290372109371";
let str2 = "123213123213";
let str3 = "123";
let str4 = "1";
let str5 = "";

console.log(maskify(str1));
console.log(maskify(str2));
console.log(maskify(str3));
console.log(maskify(str4));
console.log(maskify(str5));