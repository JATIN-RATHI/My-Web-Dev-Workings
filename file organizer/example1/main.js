let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];
let address = inputArr[1];
if(command == "help")
{
    let helpCommand = require("./commands/help");
    console.log(helpCommand.varName);
    
}
if(command == "organize")
{
    let organizeCommand = require("./commands/organize");
    organizeCommand.func(address);
}

if(command == "tree")
{
    let treeCommand = require("./commands/tree");
    console.log(treeCommand.varName);
}