const pos: number = 0;

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

let aa: string;
let bb = aa as "aa"
