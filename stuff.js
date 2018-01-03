// This file is a module!
// Exporting things in the module

var counter = function (arr) {
  return 'There are ' + arr.length + ' elements in this array => ' + arr.toString();
};

var adder = function (a, b) {
  return `The sum of ${a} + ${b} is ${a + b}`;
};

var pi = 3.142;

module.exports = {
  counter: counter,
    adder: adder,
       pi: pi
}