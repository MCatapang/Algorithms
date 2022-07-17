/*
    - Group of 12 people
    - There's a teeter-totter
        - Can hold more than one person on each side
    - Everyone weighs the same except for one person
    - Find the heaviest person
*/

const islandPeople = [
    {"Name": "Celeste", "Weight": 100},
    {"Name": "Johnson", "Weight": 100},
    {"Name": "Jae", "Weight": 100},
    {"Name": "Michael", "Weight": 100},
    {"Name": "Martha", "Weight": 100},
    {"Name": "Angelo", "Weight": 100},
    {"Name": "James", "Weight": 100},
    {"Name": "Teddy", "Weight": 100},
    {"Name": "Greg", "Weight": 100},
    {"Name": "Norma", "Weight": 130},
    {"Name": "Stewart", "Weight": 100},
    {"Name": "Shelly", "Weight": 100}
]

function brooklyn(arr) {
    if(arr.length == 1) return arr[0]["Name"];
    if(arr.length == 3) {
        return arr[0]["Weight"]*2 > arr[1]["Weight"] + arr[2]["Weight"] ?
            arr[0]["Name"] :
            brooklyn(arr.slice(1, arr.length));
    }

    let halfway = Math.floor(arr.length/2);
    let group1 = arr.slice(0, halfway);
    let group2 = arr.slice(halfway, arr.length);
    let group1Weight = 0;
    let group2Weight = 0;

    group1.forEach(e => group1Weight += e.Weight);
    group2.forEach(e => group2Weight += e.Weight);

    return group1Weight > group2Weight ?
        brooklyn(group1) :
        brooklyn(group2)
}

console.log(brooklyn(islandPeople));