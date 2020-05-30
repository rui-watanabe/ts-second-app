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

interface Todo {
  title: string;
  text: string;
}
type TodoAble = Partial<Todo>
type ReadTodo = Readonly<Todo>

// const fetchData: Promise<string> = new Promise(resolve => (
//   setTimeout(() => {
//     resolve('hello');
//   }, 3000)
// ));

// fetchData.then(data => {
//   data.toUpperCase();
// })

const vegetables1: string[] = ['Tomato', 'Broccoli', 'Asparagus'];
const vegetables2: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}
type MappedTypes = {
  // [P in 'tomato' | 'pumpkin']: P
  -readonly [P in keyof Vegetables]?: P
}

