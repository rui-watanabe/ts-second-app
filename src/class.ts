class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    return age > 17 ? true : false;
  };

  readonly id:number = 32;
  constructor(readonly name: string, protected age: number) {
    // this.id = 33;
    // this.name = 'hah';
  };

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

class Teacher extends Person {
  get subject(): string {
    if(!this._subject) {
      throw new Error('There is no Subject.')
    }
    return this._subject;
  }

  set subject(value) {
    if(!this._subject) {
      throw new Error('There is no Subject.')
    }
    this._subject = value;
  }

  constructor(name: string, age: number, private _subject: string ){
    super(name, age);
  };

  greeting(){
    console.log(`Hello, My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`)
  }
}

console.log(Person.species);
console.log(Person.isAdult(37));
console.log(Teacher.species);
console.log(Teacher.isAdult(37));

// const teacher = new Teacher('reo', 34, 'Math');
// teacher.subject = 'Music';
// console.log(teacher.subject);
// teacher.greeting();

// let Person2: Person;
// const max = new Person('Max', 32);
// max.incrementAge();
// max.greeting();

// const anotherMax = {
//   name: 'anotherMax',
//   // greeting(){},
//   // anotherGreeting: max.greeting
//   greeting: max.greeting
// }

// anotherMax.greeting();