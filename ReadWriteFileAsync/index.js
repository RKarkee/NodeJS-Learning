/*
READING AND WRITING FILE ASYNCHRONOUSLY
CallBack Hell concept
*/
const fs = require("fs");
fs.readFile("./File/input.txt", "utf-8", (error1, data1) => {
  console.log(data1);
  console.log(data1.trim());
  data1 = data1.trim();
  fs.readFile(
    `../ReadWriteFileSync/Files/${data1}.txt`,
    "utf-8",
    (error2, data2) => {
      console.log(data2);
      fs.writeFile(
        `./File/output.txt`,
        `${data2}\n\n Date Created :${new Date()}`,
        () => {
          console.log("File written Successfully.");
        }
      );
    }
  );
});

console.log("Reading File...");
