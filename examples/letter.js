const rdar = require('../lib/rdar.js');

let template = '{[orders]} Dear {{name}}:\nYour order has shipped and will arrive on {{arrival_date}}\n\n{[/orders]}'

let new_orders = {
    "orders": [
        { "name": "Customer One", "arrival_date": "1/1/2019" },
        { "name": "Customer Too", "arrival_date": "3/3/2019" },
        { "name": "Customer Also", "arrival_date": "9/9/2019" }
    ]
};

let letters = rdar(template, new_orders);

console.log(letters);
