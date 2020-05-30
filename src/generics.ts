function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}
// console.log(copy<string>('hello'));
console.log(copy({ name: 'Max' , age: 38}, 'age'));

type K = keyof { name: string, age: number }