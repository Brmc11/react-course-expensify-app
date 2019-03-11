//
// Object Destructuring
//

// const person = {
//   firstName: 'Benjamin',
//   lastName: 'McGrath',
//   age: 33,
//   location: {
//     city: 'Cincinnati',
//     temp: 28
//   }
// };
//
// const { firstName: name, age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
//
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguinnn'
//   }
// };
//
// const { name: publisherName = "Self Published"} = book.publisher;
//
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['961 Hidden Palm Ct', 'PonTE VeErdee', 'OHFL', '45150'];
const [street, city, state, zip] = address;

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}`);u

// console.log(`good evening good sir. you are in ${city} ${state}, on a fair street called ${street}.`);
