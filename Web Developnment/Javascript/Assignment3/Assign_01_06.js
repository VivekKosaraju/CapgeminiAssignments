const json = '{"first":"Anant", "last": "Bhushan"}';
const name = JSON.parse(json);

console.log(name.first);
console.log(name.last);