console.log ('destructing')

const person = {
  name: "amit",
  surname: "vijay",
  address: {
    addr1: "Line 1",
    addr2: "Line 2",
    postcode: "N1 9AW"
  }
}

const {name, surname: lastname} = person;
const {postcode} = person.address;


console.log ('name ' + name);
console.log ('lastname ' + lastname);
console.log ('postcode ' + postcode);

const person2 = {
  name: "amit",
  surname: "vijay",
  address: {
    addr1: "Line 1",
    addr2: "Line 2",
    postcode: "N1 9AW"
  }
}

const {name2 = 'Anonymous', surname: lastname2} = person2;
const {postcode2} = person2.address;


console.log ('name ' + name2);
console.log ('lastname ' + lastname2);
console.log ('postcode ' + postcode2);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryabn Holiday',
  publisher: {
    name: 'Penguin'
  }
}

// de-structing from nested object, renaming and using default
const {name: publisherName = 'Self-Publish'} = book.publisher;

console.log(publisherName)

// Array de-structing

const address = [
  '2399 South Juniper Street',
  'Philadalphia',
  'Pennsylvania',
  '19434'
]

console.log (`You are in ${address[1]} ${address[2]}`)

const [street, city, state, zip] = address;

console.log (`You are in ${city} ${state}`);


const item = [
  'Coffee (hot)', '£2.00', '£2.50', '£4.00'
]

const [itemName,, mediumPrice,] = item;
console.log (`A medium ${itemName} consts ${mediumPrice}`)