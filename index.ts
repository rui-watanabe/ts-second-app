export {};

let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

const person: {
  name: {
    first: string;
    last: string;
  };
  age: number
} = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1600, false]
// can push
book.push(21);

enum CoffeeSize {
  SHORT,
  TALL = 'TALL',
  GRANDE = 1,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [10, 'hello'];

// let = string-type, const = literal-type
const apple: 'apple' = 'apple';

// similar enum 
type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize = 'large';
const cloth: {
  color: string;
  size: 'small' |  'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 2)

// can use void, any
function sayHello(): void {
  console.log('hello');
}

// can use undefined, void, any
function sayHello2(): undefined {
  console.log('hello');
  return;
}

let tmp: undefined = undefined;
let tmp2: null = null;

// types can leave either one
const anotherAdd: (n1: number, n2: number) => number = function (n1: number, n2: number) {
  return n1 + n2;
};
anotherAdd(2, 2);

const doubleNumber: (number: number) => number = num => num * num;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2)
  console.log(doubleNum);
}

doubleAndHandle(32, doubleNum => {
  return doubleNum;
});

let unknownInput: unknown;
let hoge: any;
let text: string;
unknownInput = 'hello';
// error
// text = unknownInput;
text = hoge;

// not error
if(typeof unknownInput === 'string'){
  unknownInput
}

function error(message: string): never {
  throw new Error(message);
}

console.log(error('this is error'));

