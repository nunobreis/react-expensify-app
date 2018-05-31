const person = {
  name: 'Nuno',
  age: 20,
  location: {
    city: 'Barcelona',
    temp: 24
  }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);


const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {publisher: publisherName = 'Self-Published'} = book;

console.log(publisherName);
