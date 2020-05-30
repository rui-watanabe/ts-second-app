type Enginner = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EnginnerAndBlogger = Enginner & Blogger;

// interface Enginner {
//   name: string;
//   role: string;
// }

// interface Blogger {
//   name: string;
//   follower: number;
// }

// interface EnginnerAndBlogger extends Enginner, Blogger {}

const max: EnginnerAndBlogger = {
  name: 'max',
  role: 'front-end',
  follower: 333
}

type NumberOrBoolean = number | boolean;
type StringOrNumber = string | number;
type Mix = NumberOrBoolean & StringOrNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if(typeof x === 'string'){
    return x.toUpperCase();
  }
  return x;
}
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
// in case of overload, it must be type that supports all
const upperHello: TmpFunc = function (x: string | number) { return 0 };

// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }
// interface FuncB {
//   (a: number): number;
// }
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: string | number) { return 0};
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
let unionFunc: FuncA | FuncB;
// can return union type, can't use only variable declaration (not equal let unionFunc: (a: never) => number;)
unionFunc = function(a: number) {return 0};


// const upperHello: TmpFunc = toUpperCase;
// upperHello('hi');
// upperHello(32);


type NomadWorker = Enginner | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if('role' in nomadWorker){
    console.log(nomadWorker.role);
  }
  if('follower' in nomadWorker){
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('Bau Bau')
  }
}

class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('pio pio');
  }
  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch(pet.kind){
    case 'bird':
      pet.fly();
      
  }
  // if('fly' in pet){
  if(pet instanceof Bird){
    console.log(pet.fly());
  }
}
havePet(new Bird());


// const input = document.getElementById('input')!; // not allow null
// const input = <HTMLInputElement>document.getElementById('input');
// const input = document.getElementById('input') as HTMLInputElement;
// input.value = 'initial input value';
(document.getElementById('input') as HTMLInputElement).value = 'initial input value';

interface Designer {
  name: string;
  // only use string (index can use all-type)
  [index: string]: string;
}

const designer: Designer = {
  name: 'Max',
}

designer.hoge = 'hoge';

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string
    }
  }
}

const downloadedData: DownloadedData = {
  id: 1
}
// allow undefined
console.log(downloadedData.user?.name?.first)
// null or undefined (?? can't use '' or 0 = ||)
const userData = downloadedData.user ?? 'no-user';
type id = DownloadedData['id' | "user"];

// enum type can put in number
enum Color {
  RED,
  BLUE
}

// let target = Color.RED;
// let source = 0;

// let target = function(a: string, b: string) {};
// let source = function(a: string) {};
// target = source;
// target('hi', 'hello');

class AdvancedPerson {
  name: string = 'Petter';
  // private age: number = 23; //can't use private
  age: number = 23;
}

class AdvancedCar {
  name: string = 'Prius';
  age: number = 5;
}

let target = new AdvancedPerson;
let source = new AdvancedCar;
target = source;