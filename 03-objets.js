
const person = {
    name :'Tony',
    lastname: 'Stark',
    age: 45,
    address: {
        city: "New York",
        zip:234552,
        lat: 24542,
        lng: 23465.34543
    }
}

const person2 = {...person};
person2.name = 'peter';

console.log (person);
console.log (person2)