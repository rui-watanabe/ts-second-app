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

function toUpperCase(x: string | number) {
  if(typeof x === 'string'){
    return x.toUpperCase();
  }
  return '';
}

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