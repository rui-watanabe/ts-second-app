class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Person){
    console.log(`Hello, My name is ${this.name}`)
  }

  // arrow function is can only be used at definition
  // greeting = () => {
  //   console.log(`Hello, My name is ${this.name}`)
  // }

}

let Person2: Person;
const max = new Person('Max');
max.greeting();

const anotherMax = {
  name: 'anotherMax',
  // greeting(){},
  // anotherGreeting: max.greeting
  greeting: max.greeting
}

anotherMax.greeting();