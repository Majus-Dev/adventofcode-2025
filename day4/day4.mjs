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

      let topleft = (rolls[i - 1] ?? "")[j - 1] ?? ".";
      let topmiddle = (rolls[i - 1] ?? "")[j] ?? ".";
      let topright = (rolls[i - 1] ?? "")[j + 1] ?? ".";
      let middleleft = (rolls[i] ?? "")[j - 1] ?? ".";
      let middleright = (rolls[i] ?? "")[j + 1] ?? ".";
      let bottomleft = (rolls[i + 1] ?? "")[j - 1] ?? ".";
      let bottommiddle = (rolls[i + 1] ?? "")[j] ?? ".";
      let bottomright = (rolls[i + 1] ?? "")[j + 1] ?? ".";

      let adjacent = [
        topleft,
        topmiddle,
        topright,
        middleleft,
        middleright,
        bottomleft,
        bottommiddle,
        bottomright,
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
