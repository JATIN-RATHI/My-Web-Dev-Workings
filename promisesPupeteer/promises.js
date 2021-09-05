let fs = require('fs');
// call back way of doing async task
console.log("Before");
let filepromise = fs.promises.readFile("f1.txt");
console.log("promise : ", filepromise);
// function -> resolve -> data
// function pass -> resolve  
filepromise.then(function cb(data){
    console.log("Data : "+ data);
})
// function pass reject 
filepromise.catch(function(err){
    console.log("Error : " + err);
})

console.log("After");