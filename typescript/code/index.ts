const pos: number = 0;

interface Window {
  title: string;
}
// 可以向现有接口追加字段，但type不能
interface Window {
  ts: number;
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

let aa: string;
let bb = aa as "aa";

const fun = (...arg: any[]) => {
  console.log(arg);
};
const a = 2;
const b = 3;
fun`${a}<h1>${a}</h1><h2>${b}</h2>`;

type Fish = { aa: string; bb?: number };
type Bird = { cc: boolean };

function isFish(pet: Fish): boolean {
  return (pet as Fish) !== undefined;
}
