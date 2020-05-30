class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: { name: string }){
    console.log(`Hello, My name is ${this.name}`)
  }

}

const max = new Person('Max');
max.greeting();

const anotherMax = {
  name: 'anotherMax',
  anotherGreeting: max.greeting
}

anotherMax.anotherGreeting();