var events = require('events');
var util = require('util');

// Event emmiter
var myEmmiter = new events.EventEmitter();

myEmmiter.on('someEvent', function (msg) {
    console.log(msg);
});

myEmmiter.emit('someEvent', 'The event was emmited!');

// Using util module
var Person = function (name) {
  this.name = name;
};

// Inherit the event emmiter
util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var bob = new Person('Bob');
var july = new Person('July');
var people = [james, bob, july];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'Suh, dudes!');
july.emit('speak', 'Yeaaah!');