// decorator is executed when class is defined
function Logging (message: string) {
  console.log('Executed Logging decorator factory');
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
    console.log('Executed Logging decorator');
  } 
}

function Component (template: string, selector: string) {
  console.log('Executed Component decorator factory');
  return function <T extends  { new(...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log('Executed Component decorator');
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if(mountedElement){
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }

    }
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('Property Logging');
  console.log(target)
  console.log(propertyKey)
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Method Logging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

function enumerable(isEnumerable: boolean) {
  return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
    return {
      enumerable: isEnumerable
    }
  }
}


function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Logging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

// component decorator factory > logging decorator factory > component decorator > logging decorator
@Component('<h1>{{ name}}</h1>','#app')
@Logging('Logging User')
class User {
  @PropertyLogging
  name = 'max';
  constructor(private _age: number){
    console.log('User was created')
  }

  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  @enumerable(false)
  @MethodLogging
  greeting(){
    console.log('Hello');
  }
}

const user1 = new User(44);
const user2 = new User(43);
const user3 = new User(54);