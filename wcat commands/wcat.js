let fs = require("fs");
let inputArr = process.argv.slice(2);

let optionsArr = [];
let filesArr = [];

for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);

    }


}
//checking options
let isBothPresent = optionsArr.includes("-b") && optionsArr.includes("-n");
if (isBothPresent==true) {
    console.log("either enter -n or -b option");
    return;
}
// if path exists
for (let i = 0; i < filesArr.length; i++) {

    let isPresent = fs.existsSync(filesArr[i]);
    if (isPresent == false) {
        console.log(`file ${filesArr[i]} is not present`);
        return;
    }
}
// reading the file content
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let bufferContent = fs.readFileSync(filesArr[i]);
    content += bufferContent + "\r\n";
}

let contentArr = content.split("\r\n");

let isSPreset = optionsArr.includes("-s");      
if (isSPreset == true) {
    for (let i = 1; i < contentArr.length; i++) {       //converting big line breaks into 1 line
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr;
}
console.log(".........................")

let isNPresent = optionsArr.includes("-n");     //if -n present befor path
if (isNPresent == true) {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = `${i + 1} ${contentArr[i]} `;       //numbering every lines of file
    }
}

let isBPresent = optionsArr.includes("-b");
if (isBPresent == true) {

    let counter = 1
    for (let i = 0; i < contentArr.length; i++) {       //numbering non-empty lines only
        if (contentArr[i] != "") {

            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}
console.log(contentArr.join("\n"));