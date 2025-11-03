const pos: number = 0;

interface Window<T> {
  title: T;
}
// 可以向现有接口追加字段，但type不能
interface Window<T> {
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

type SomeConstructor = {
  new (s: string): void;
  new (b: number, a: string): void;
};

const aaFun: SomeConstructor;
new aaFun(2, "");

type User<T> = Array<T>;

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

const obj = { colour: "red", width: 100 };

let mySquare = createSquare(obj);

interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

type Staff = Person1 & Person2;

declare const staffer: Staff;
staffer.name;

interface MakeDate {
  (timestamp: number): Date;
  (m: number, d: number, y: number): Date;
}
const makeDate: MakeDate = (m: number, d?: number, y?: number) => {
  return new Date();
};

makeDate(22);

enum Type {
  one = "一",
  two = "二",
  three = "三",
}

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

const animal: Animal = { live() {} };
const dog: Dog = { live() {}, woof() {} };

const temp: Animal = dog;
