/* 
READING AND WRITING FILES SYNCHRONOUSLY
*/
const fs = require("fs");

let readfile = fs.readFileSync("./Files/input.txt", "utf-8");
console.log(readfile);

let content = ` Content write into file : ${readfile} \n Date created :${new Date()}`;
fs.writeFileSync("./Files/output.txt", content);
