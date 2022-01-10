const fs = require("fs");
let path = require("path");

for (let i = 0; i < 10; i++) {
  let dirPathToMake = `Lecture-${i}`;
  fs.mkdirSync(dirPathToMake);
  fs.writeFileSync(
    path.join(dirPathToMake, "readme.md"),
    `# readme for ${dirPathToMake}`
  );
}

let ext = path.extname(path.join(__dirname, "abc.txt"));
console.log(ext);
console.log(path.basename(__dirname));
console.log(path.basename(path.join(__dirname, "abc.txt")));
