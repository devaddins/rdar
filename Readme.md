``` txt
 ____      ____               ____    
|  _ \    |  _ \     __ _    |  _ \   
| |_) |   | | | |   / _` |   | |_) |  
|  _ < _  | |_| |  | (_| |_  |  _ < _ 
|_| \_(_) |____(_)  \__,_(_) |_| \_(_)
                                      
```

# Recursive Dereference and Replace

Recursively dereference elements of an object and replace associated palceholders in a string with the values of those elements.

 ## Placeholders
 
 There are two supported types of placeholders.  
 * Array
    * {[ArrayName]} ... {[/ArrayName]}
 * Element
    * {{ElementName}}

## Array Placeholders

Array placeholders will repeat for every item in the associated array. For example given this object...

``` js
let new_orders = {
    "orders": [
        { "name": "Customer One", "arrival-date": "1/1/2019" },
        { "name": "Customer Too", "arrival-date": "3/3/2019" },
        { "name": "Customer Also", "arrival-date": "9/9/2019" }
    ]
};
```

... and given this template ... 

``` txt
{{orders}}
Dear {{name}}: 
Your order has shipped and will arrive on {{arrival-date}}

{[/orders]}
```

... the output will look like this ...

``` txt
Dear Customer One:
Your order has shipped and will arrive on 1/1/2019

Dear Customer Too:
Your order has shipped and will arrive on 3/3/2019

Dear Customer Also:
Your order has shipped and will arrive on 9/9/2019
```
# Element Placeholders

Element placeholders can reach down the object tree and they can also be functions. For example given this object...

```js 
let greet = {
    space: ' ',
    eol: '\n',
    greeting: 'Nope!',
    planets: {
        bang: '!',
        rand: {
            planet: function() {
                let plns = ['Mercury', 'Venus', 'Earth', 'Mars', 
                'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
                return plns[Math.floor(Math.random()*plns.length)];
            }
        } 
    }, 
    greetings: [
        {greeting: 'Good Morning'}, 
        {greeting: 'Good Afternoon'}, 
        {greeting: 'Good Night'}
    ]
}
```

... and given this template ...

```js
let template = '{[greetings]}{{greeting}}{{space}}{{planets.rand.planet}}{{planets.bang}}{{eol}}{[/greetings]}';
```

... the output will look something like this ...

```txt
Good Morning Jupiter!
Good Afternoon Jupiter!
Good Night Jupiter!
```