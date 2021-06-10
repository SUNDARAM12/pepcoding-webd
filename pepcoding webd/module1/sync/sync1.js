// fs=>file system
let fs = require("fs");
console.log("start");
let f1Data = fs.readFileSync("./f1.txt","utf8");
console.log(f1Data);
console.log("end");