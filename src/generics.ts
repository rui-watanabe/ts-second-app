function copy<T extends { name: string }>(value: T): T {
  value.name;
  return value;
}
// console.log(copy<string>('hello'));
console.log(copy({ name: 'Max' }).name);