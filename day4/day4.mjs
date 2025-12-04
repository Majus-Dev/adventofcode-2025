import { readFile } from "fs";

readFile("./day4/input.txt", (err, data) => {
  if (err) throw err;

  const rolls = data
    .toString()
    .split("\r\n")
    .filter((a) => a != "");
  let total = 0;
  let len = rolls.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < rolls[i].length; j++) {
      if (rolls[i][j] == ".") continue;

      let adjacent = [
        (rolls[i - 1] ?? "")[j - 1] ?? ".",
        (rolls[i - 1] ?? "")[j + 0] ?? ".",
        (rolls[i - 1] ?? "")[j + 1] ?? ".",
        (rolls[i + 0] ?? "")[j - 1] ?? ".",
        (rolls[i + 0] ?? "")[j + 1] ?? ".",
        (rolls[i + 1] ?? "")[j - 1] ?? ".",
        (rolls[i + 1] ?? "")[j + 0] ?? ".",
        (rolls[i + 1] ?? "")[j + 1] ?? ".",
      ];

      if (adjacent.filter((a) => a == "@" || a == "x").length < 4) {
        let asdf = rolls[i].split("");
        asdf[j] = "x";
        rolls[i] = asdf.join("");
        total++;
      }
    }
  }

  console.log(rolls.join("\n"));
  console.log("total:", total);
});
