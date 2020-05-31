// decorator is executed when class is defined
function Logging (message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  } 
}

@Logging('Logging User')
class User {
  name = 'max';
  constructor(){
    console.log('User was created')
  }
}

const user1 = new User();
const user2 = new User();
const user3 = new User();