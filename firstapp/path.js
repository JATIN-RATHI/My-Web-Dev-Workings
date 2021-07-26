let path = require("path");

// path -> paths -> platform independent
//------- node paths.js Jatin "path"
// let inputarr = process.argv.slice(2);
// let nam = inputarr[0];
// let path = inputarr[1];
// console.log(" Name - > " , nam);
// console.log(" Path - > " , path);

//current working directory
// let curdir = process.cwd();
// console.log("Current Dir -> " ,curdir);


// ---------------creating a file and writing it
let inputarr = process.argv.slice(2);
let filename = inputarr[0];
let filecontent = inputarr[1];
let curdir = process.cwd();
let directory = path.join(curdir ,"dir1" ,filename)
let fs = require("fs");
fs.writeFileSync(directory, filecontent);
console.log("File Created and writen!");
