import { readFile } from "fs";

readFile("./day2/day2input.txt", (err, data) => {
  if (err) throw err;

  const list = data.toString().split(",");

  let answer = 0;

  for (let elem of list) {
    let start = Number(elem.split("-")[0]);
    let end = Number(elem.split("-")[1]);

    for (let i = start; i <= end; i++) {
      let halflen = i.toString().length / 2;
      if (halflen % 1 != 0) continue;

      let part1 = Number(i.toString().substring(0, halflen));
      let part2 = Number(i.toString().substring(halflen));

      if (part1 == part2) {
        answer += i;
      }
    }
  }
  console.log(answer);
});
