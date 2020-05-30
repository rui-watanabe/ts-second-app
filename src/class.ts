abstract class Person {
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
    console.log(`Hello, My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }

  // abstract class can't instance conversion
  abstract explainJob(): void;

  // arrow function is can only be used at definition
  // greeting = () => {
  //   console.log(`Hello, My name is ${this.name}`)
  // }

}

class Teacher extends Person {
  private static instance: Teacher;
  explainJob(){
    console.log(`I am a teacher and teach ${this.subject}`)
  }

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

  private constructor(name: string, age: number, private _subject: string ){
    super(name, age);
  };

  static getInstance() {
    if(Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher('reo', 34, 'Math');
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);

// console.log(Person.species);
// console.log(Person.isAdult(37));
// console.log(Teacher.species);
// console.log(Teacher.isAdult(37));

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