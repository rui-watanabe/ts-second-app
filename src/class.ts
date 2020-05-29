class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  } 
}

const max = new Person('Max');
console.log(max)