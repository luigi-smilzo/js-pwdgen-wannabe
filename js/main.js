var firstName = prompt('Inserisci il tuo nome');

var lastName = prompt('Inserisci il tuo congnome');

var color = prompt('Qual è il tuo colore preferito?');

console.log('Nome:', firstName, 'Cognome:', lastName,   'Colore preferito:', color);

var password = firstName + lastName + color;

console.log(password);

document.getElementById('psw').innerHTML = password + '20';
