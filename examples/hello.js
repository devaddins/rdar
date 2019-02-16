const rdar = require('../lib/rdar.js');

let template = '{[greetings]}{{count}} {{degree}} {{greeting}} {{planets.rand.planet}}!{{eol}}{[/greetings]}';

let counter = 0;
let count = function(context) {
    if (context.greeting === 'Morning')
        counter++;
    else if (context.greeting === 'Afternoon')
        counter = counter + 100;
    else if (context.greeting === 'Night')
        counter = 999;
    else 
        counter = -1;
    return counter;
}

let greet = {
    degree: 'Good',
    // greeting: 'Nope!', // this would override those below
    greetings: [
        {greeting: 'Morning', count: count}, 
        {greeting: 'Afternoon', count: count}, 
        {greeting: 'Night', count: count}
    ],
    eol: '\n',
    planets: {
        rand: {
            planet: function(context) {
                let plns = ['Mercury', 'Venus', 'Earth', 'Mars', 
                'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
                return plns[Math.floor(
                    Math.random() * (context.pluto ? plns.length : (plns.length-1))
                )];
            }, 
            pluto: true
        } 
    }, 
}

let msg = rdar(template, greet);

console.log(msg);
