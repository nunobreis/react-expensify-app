//
// Object Destructuring
//

// const person = {
//   name: 'Nuno',
//   age: 20,
//   location: {
//     city: 'Barcelona',
//     temp: 24
//   }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
//
// console.log(`${firstName} is ${age}`);
//
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {publisher: publisherName = 'Self-Published'} = book;
//
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299, Carrer Pescadors', 'Barcelona', 'Catalunya', '08030'];

const [, city, state = 'Lisbon' ] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00'];

const [coffeeHot, ,medium = '$2,50'] = item;

console.log(`A medium ${coffeeHot} costs ${medium}.`);
