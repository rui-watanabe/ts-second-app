function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}
// console.log(copy<string>('hello'));
console.log(copy({ name: 'Max' , age: 38}, 'age'));
type K = keyof { name: string, age: number };

class LightDatabase <T extends string | number | boolean>{
  private data: T[] = [];
  add(item: T){
    this.data.push(item);
  }
  remove(item: T){
    this.data.splice(this.data.indexOf(item), 1);
  }
  get(){
    return this.data
  }

}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('banana');
stringLightDatabase.add('apple');
stringLightDatabase.add('grape');
stringLightDatabase.remove('apple');
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32, 34]
}