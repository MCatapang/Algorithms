var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


// // Divisible by 3

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id % 3 == 0) {
//         console.log(pokemon[i]);
//     }
// }


// // type > 1

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id % 33 == 0) {
//         if(pokemon[i])
//         console.log(pokemon[i].name);
//     }
// }


// type = poison

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types.length == 1) {
//         if(pokemon[i].types[0] == "poison") {
//             console.log(pokemon[i].name);
//         }
//     }
// }


// 2nd type = flying

for(var i=0; i<pok??mon.length; i++) {
    if(pok??mon[i].types[1] == "flying") {
        console.log(pok??mon[i].types[0]); 
    }
}


// only type = poison; reverse name

for(var i=0; i<pok??mon.length; i++) {
    if(pok??mon[i].types.length == 1) {
        if (pok??mon[i].types[0] == "poison") {
            console.log(nameReverser(pok??mon[i].name));
        }
    }
}

function nameReverser(name) {
    var revName = "";
    for(var i=name.length - 1; i>=0; i--){
        revName += name[i];
    }
    return(revName);
}