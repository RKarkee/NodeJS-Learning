const readline = require("readline");

/* READING INPUT AND WRITING OUTPUT ON TERMINAL
 */

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Please Enter your Name:", (name) => {
  console.log("Your Name ::" + name);
  r1.close();
});

r1.on("close", () => {
  console.log("Interface Closed!");
  process.exit(0);
});
