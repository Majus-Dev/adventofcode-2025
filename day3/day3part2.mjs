import { readFile } from "fs";

readFile("./day3/input.txt", (err, data) => {
  if (err) throw err;

  let list = data.toString().split("\n");
  let total = 0;

  list.forEach((b) => {
    let len = b.length;
    let high = 0;

    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        let num = Number(`${b[i]}${b[j]}`);
        if (num > high) high = num;
      }
    }
    total += high;
  });

  console.log(total);
});
