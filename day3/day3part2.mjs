import { readFile } from "fs";

readFile("./day3/input.txt", (err, data) => {
  if (err) throw err;

  let list = data.toString().split("\n");
  let total = 0;

  const count = 12;

  list.forEach((b) => {
    let len = b.length;
  });

  console.log(total);
});
