"use strict";
exports.__esModule = true;
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1600, false];
// can push
book.push(21);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 1] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 2] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
var unionType = 10;
unionType = 'hello';
var unionTypes = [10, 'hello'];
// let = string-type, const = literal-type
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
// can use void, any
function sayHello() {
    console.log('hello');
}
// can use undefined, void, any
function sayHello2() {
    console.log('hello');
    return;
}
var tmp = undefined;
var tmp2 = null;
// types can leave either one
var anotherAdd = function (n1, n2) {
    return n1 + n2;
};
anotherAdd(2, 2);
var doubleNumber = function (num) { return num * num; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(32, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var hoge;
var text;
unknownInput = 'hello';
// error
// text = unknownInput;
text = hoge;
// not error
if (typeof unknownInput === 'string') {
    unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('this is error'));
