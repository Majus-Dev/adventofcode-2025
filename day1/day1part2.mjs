import { readFile } from "fs";

readFile("./day1/day1input.txt", async (err, data) => {
  if (err) throw err;

  let count = 0;
  let pointer = 50;

  const list = data.toString().split("\n");
  for (let elem of list) {
    let sign = elem[0] == "L" ? -1 : 1;
    let value = Number(elem.replace("R", "").replace("L", "")) * sign;

    for (let i = 0; i < Math.abs(value); i++) {
      pointer = (pointer + 100 + 1 * sign) % 100;
      if (pointer == 0) {
        count++;
      }
    }
  }
  console.log(count);
});
