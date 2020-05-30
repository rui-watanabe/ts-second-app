class Person {
  constructor(public name: string, private age: number) {};

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person){
    console.log(`Hello, My name is ${this.name}. I am ${this.age} years old.`)
  }

  // arrow function is can only be used at definition
  // greeting = () => {
  //   console.log(`Hello, My name is ${this.name}`)
  // }

}

let Person2: Person;
const max = new Person('Max', 32);
max.incrementAge();
max.greeting();

// const anotherMax = {
//   name: 'anotherMax',
//   // greeting(){},
//   // anotherGreeting: max.greeting
//   greeting: max.greeting
// }

// anotherMax.greeting();