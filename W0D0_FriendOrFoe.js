function friend(friends) {
    let outputArr = [];
    friends.forEach(f => {
        if (f.length == 4) {
            outputArr.push(f);
        }
    })
    return outputArr;
}

let friends1 = ["Ryan", "Kieran", "Mark"];
let friends2 = ["Ryan", "Jimmy", "123", "4", "Cool Man"];
let friends3 = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];
let friends4 = ["Love", "Your", "Face", "1"];

console.log(friend(friends1));
console.log(friend(friends2));
console.log(friend(friends3));
console.log(friend(friends4));