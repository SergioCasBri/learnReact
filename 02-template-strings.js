

const name = 'Sergio';
const lastname = 'Castro';

const fullName = `${ name } ${ lastname }`;

console.log ( fullName );

function gethello(name) {
    return 'hi' + name;
}

console.log ( `this is a text: ${ gethello (name)}`);
