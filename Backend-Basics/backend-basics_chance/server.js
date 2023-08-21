import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((req, res) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const resString = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;
  res.end(resString);
});

const chance = new Chance();
