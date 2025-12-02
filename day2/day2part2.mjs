import { readFile } from "fs";

readFile("./day2/day2input.txt", (err, data) => {
  let starttime = Date.now();
  if (err) throw err;

  const list = data.toString().split(",");

  let answer = 0;

  for (let elem of list) {
    let start = Number(elem.split("-")[0]);
    let end = Number(elem.split("-")[1]);

    for (let i = start; i <= end; i++) {
      let invalid = false;
      for (let j = 1; j <= i.toString().length - 1; j++) {
        let regex = new RegExp(`.{1,${j}}`, "g");
        let arr = i.toString().match(regex);
        let matcher = arr[0];

        let validity = arr.every((a) => a == matcher);
        if (!validity) continue;
        invalid = true;
      }

      if (invalid) {
        answer += i;
      }
    }
  }
  console.log(answer);
  console.log(`took ${(Date.now() - starttime) / 1000}s to process`);
  console.log();
});
