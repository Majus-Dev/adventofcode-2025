import { readFile } from "fs";

readFile("./day5/input.txt", (err, data) => {
  if (err) throw err;

  let total = 0;

  const ranges = data
    .toString()
    .replaceAll("\r", "")
    .split("\n")
    .filter((a) => a.includes("-"));
  const ingredients = data
    .toString()
    .replaceAll("\r", "")
    .split("\n")
    .filter((a) => !a.includes("-") && a != "");

  for (let ingredient of ingredients) {
    let unspoiled = false;
    for (let range of ranges) {
      let low = Number(range.split("-")[0]);
      let high = Number(range.split("-")[1]);
      if (Number(ingredient) >= low && Number(ingredient) <= high)
        unspoiled = true;
    }
    if (unspoiled) total++;
  }

  console.log(total);
});
