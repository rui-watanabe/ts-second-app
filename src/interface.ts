// interface is only use object
interface Human {
  name: string;
  age: number;
}

// type is can use all
// type Human = {
//   name: string;
//   age: number;
// } | string

const human: Human = {
  name: 'Max',
  age: 44
}

let developer: Human;