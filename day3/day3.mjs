import { readFile } from "fs";

readFile("./day3/input.txt", (err, data) => {
  if (err) throw err;

  let list = data.toString().split("\r\n");
  let total = 0;

  list.forEach((b) => {
    b = Number(b);
    let high = 0;
    for (let i = 0; i < b.toString().length; i++) {
      for (let j = 1; j <= b.toString().slice(i + 1).length; j++) {
        let num = Number(`${b.toString()[i]}${b.toString().slice(i)[j]}`);
        if (high < num) high = num;
      }
    }
    console.log(high);
    total += high;
  });

  console.log(total);
});
