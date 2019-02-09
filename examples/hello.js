const rdar = require('../lib/rdar.js');

let template = '{[greetings]}{{count}} {{greeting}}{{space}}{{planets.rand.planet}}{{planets.bang}}{{eol}}{[/greetings]}';

let counter = 0;
let count = function(context) {
    return  counter++;
}

let greet = {
    // greeting: 'Nope!', // this would override those below
    greetings: [
        {greeting: 'Good Morning', count: count}, 
        {greeting: 'Good Afternoon', count: count}, 
        {greeting: 'Good Night', count: count}
    ],
    space: ' ',
    eol: '\n',
    planets: {
        bang: '!',
        rand: {
            planet: function(context) {
                let plns = ['Mercury', 'Venus', 'Earth', 'Mars', 
                'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
                return plns[Math.floor(Math.random()*plns.length)];
            }
        } 
    }, 
}

let msg = rdar(template, greet);

console.log(msg);
