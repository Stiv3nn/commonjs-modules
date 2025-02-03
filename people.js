// 3 - people.js

// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.


// 1. Importa la tua funzione da names.js
const fullName = require ("./name");

// 2. Importa la tua funzione da hobbies.js
const hobbies = require ("./hobbies");

// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

function namesHobbies() {

    const nameSurname = fullName("Mario", "Rossi");
    const activities = hobbies("viaggi", "sport", "lettura");

    return{
        fullName: nameSurname.firstName + " " + nameSurname.lastName,
        hobbies: activities[0] + ", " + activities[1] + ", " + activities[2]
    };
};

console.log(namesHobbies());
