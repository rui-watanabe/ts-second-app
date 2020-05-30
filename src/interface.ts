// interface is only use object
interface Human {
  name: string;
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

const human: Human = {
  name: 'Max',
  age: 44,
  greeting(message: string){
    console.log(message);
  }
}

let tmpFunction: (message: string) => void;