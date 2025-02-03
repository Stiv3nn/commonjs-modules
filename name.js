// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.


const person = createFullName("Mario", "Rossi");

function createFullName(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName
    };
}

console.log(person);

// Esportazione di più elementi
module.export = createFullName;

// ALTERNATIVA PER ESPORTARE
//module.export = {createFullName};