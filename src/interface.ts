type addFunc = (num1: number, num2: number) => number;
// interface addFunc {
//   (num1: number, num2: number): number;
// }
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => n1 + n2;

type nameAble = {
  name: string;
}

// interface is only use object
interface Human extends nameAble {
  age: number;
  // greeting: (message: string) => void;
  // only use method
  greeting(message: string): void;
}

// type is can use all
// type Human = {
//   name: string;
//   age: number;
// } | string

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number){};

  greeting(message: string){
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Max',
  age: 38,
  experience: 5,
  greeting(message: string){
    console.log(message);
  }
}

const user: Human = tmpDeveloper;


// const human: Human = {
//   name: 'Max',
//   age: 44,
//   greeting(message: string){
//     console.log(message);
//   }
// }

// let tmpFunction: (message: string) => void;