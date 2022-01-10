const fs = require("fs");

fs.openSync("abc.txt", "w");

fs.writeFileSync("abc.txt", "Mele babu ne thana thaya??");

fs.writeFileSync("abc.txt", "Mele babu ne thana thu nhi thaya??");

fs.appendFileSync("abc.txt", "tele babu ne thana tha liyaa");

fs.mkdirSync("NewDirectory");

fs.writeFileSync("NewDirectory/hello.txt", "I'm hello file");

let dirObj = fs.readdirSync("NewDirectory");
console.log(dirObj);

fs.rmdirSync("NewDirectory");
