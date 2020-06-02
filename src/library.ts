// import axios from 'axios';
// axios.get('http://foo.com');
// import _ from 'lodash';
console.log(_.shuffle([1, 2, 3, 4]));
namespace myApp {
  const hello = 'hello in namespace';
  export const name ='max';
  export interface Nameable {
    name: string;
  }
}
// const hello = myApp.name;
let nameable: myApp.Nameable;

