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
  speak() {
    console.log('Bau Bau')
  }
}

class Bird {
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
  // if('fly' in pet){
  if(pet instanceof Bird){
    console.log(pet.fly());
  }
}
havePet(new Bird());