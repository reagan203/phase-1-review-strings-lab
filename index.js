// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

typeof "const currentUser = 'Grace Hopper';";
//=> "string"

"const currentUser = 'Grace Hopper';".length;
//=> 35

currentUser;
//=> Uncaught ReferenceError: currentUser is not defined
"High " + "five!";
//=> "High five!"

"We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
//=> "We can concatenate as many strings as our heart desires."

const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
//=> "Saying that interpolation with template literals is better than concatenation 100% of the time is simply false. But it is pretty cool!

// Beware that new lines inside of a template literal will be preserved as new lines in the resulting string!"
shortGreeting
    
    'Edsger Dijkstra'[0];
//=> "E"

'Edsger Dijkstra'.charAt(0);
//=> "E"
'Edsger Dijkstra'.length;
//=> 15

'Edsger Dijkstra'[15];
//=> undefined

'Edsger Dijkstra'[14];
//=> "a"
'Edsger Dijkstra'.slice();
//=> "Edsger Dijkstra"
'Edsger Dijkstra'.slice(7);
//=> "Dijkstra"
'Edsger Dijkstra'.slice(0, 3);
//=> "Eds"
currentUser.slice(0, 1)

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
