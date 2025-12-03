import { readFile } from "fs";

readFile("./day1/input.txt", (err, data) => {
  if (err) throw err;

  let count = 0;
  let pointer = 50;

  const list = data.toString().split("\n");
  for (let elem of list) {
    let sign = elem[0] == "L" ? -1 : 1;
    let value = Number(elem.replace("R", "").replace("L", "")) * sign;

    pointer = (pointer + 100 + value) % 100;
    if (pointer == 0) count++;
  }
  console.log(count);
});
