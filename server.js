import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
export const server = createServer((request, response) => {
  response.end(
    `Hello, my name is ${chance.name()} and I am ${chance.age()} years old. I am a ${chance.profession()}.`
  );
});
