// decorator is executed when class is defined
function Logging (message: string) {
  console.log('Executed Logging decorator factory');
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  } 
}

function Component (template: string, selector: string) {
  console.log('Executed Component decorator factory');
  return function (constructor: { new(...args: any[]): { name: string } }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if(mountedElement){
      mountedElement.innerHTML = template;
      mountedElement.querySelector('h1')!.textContent = instance.name;
    }
  }
}

// component decorator factory > logging decorator factory > component decorator > logging decorator
@Component('<h1>{{ name}}</h1>','#app')
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