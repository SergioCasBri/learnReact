
const greet = (name) => {
    return `hi ${ name }`;
}

const greet3 = ( name ) => `hi ${name}`;
const greet4 = () => `hiii`;

console.log (greet ('Sergio'));
console.log (greet3 ('Andres'));
console.log (greet4 ());

const getUser = () => ({
    uid: 'ABC123',
    userName: 'sayhi1234'
});


const user = getUser();
console.log ( user);



const getUserActive = (name) => ({
        uid: 'ABC123',
        username: name
})

const activeUser = getUserActive ('SerAndres');
console.log ( activeUser );