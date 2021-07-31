//----------- files 

// let fs = require("fs");
//let content = fs.readFileSync("text.txt");
//console.log("Content : " + content);

//buffer -> VideoPlaybackQuality, audi, text
//fs.writeFileSync("text.txt", "I am a file created by Jatin Rathi");

//-----update 
// // fs.appendFileSync("text.txt", "\nI like Coding.");

//-------delete
// fs.unlinkSync("text.txt");
// console.log("File removed!");

// -----------folder
let fs = require("fs");
// fs.mkdirSync("dircreated");

// fs.rmdirSync("dircreated");

//------------check path exist/not -> belongs to folder or file
// let exists = fs.existsSync("text.txt");
// console.log("Does Path exits? " ,exists);

//-----------check the info at path provided
// let status  = fs.lstatSync("text.txt");
// console.log("Status of path : " , status);
// console.log("Is File? : " , status.isFile());
// console.log("Is Directory? : " , status.isDirectory());


//------------folder content

let address = "C:\\Users\\RATHI\\.vscode\\programs\\pepcoding\\firstapp";
let content = fs.readdirSync(address);
console.log("Directory Content -> " , content);