import axios from 'axios';
axios.get('http://foo.com');
// import _, { hello }from 'lodash';
// type hi = hello;
import _ from 'lodash';
_.hello
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

//value
let name: string;
// function name () {}
// enum name{}
// class name {}

// error let or const
// namespace name {
//   export const name: string = 'max';
// }

// //type
// interface name {};
// interface name {
//   first: string;
//   first2(): void;
// };
// interface name {
//   last: string;
//   //overload priority high
//   last2(): number
// };
// //merge
// let tmp: name;
// // type name = {}

//namespace
namespace name {
  const first: string ='max';
};
namespace name {
  const first: string ='max';
};


