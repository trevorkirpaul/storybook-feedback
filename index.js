'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var name = 'Trevor';
var greeter = function (_a) {
    var name = _a.name, age = _a.age;
    return console.log("Hello, " + name + ", you are " + age);
};

exports.greeter = greeter;
exports.name = name;
