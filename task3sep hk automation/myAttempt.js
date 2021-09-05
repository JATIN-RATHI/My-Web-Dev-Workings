var loginpage = "https://www.hackerrank.com/auth/login";
var mail_id = "civex40531@mom2kid.com";
var pswd = "jatin1998";
let code1 = `#include <bits/stdc++.h>
using namespace std;

int main(){
    int number_of_elements;
    cin >> number_of_elements;
    vector <int> array(number_of_elements);
    int sum_of_array = 0;
    
    for(int i = 0; i < number_of_elements; i++){
       cin >> array[i];
       sum_of_array += array[i];
    }
    
    cout << sum_of_array;
    return 0;
}`
let puppeteer = require("puppeteer");
let hackerrankcode = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // 
    // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});

let page, browser, rTab;

hackerrankcode.then(function (browserObj) {
    console.log("Browser opened");
    browser = browserObj
    let browserTabOpenPromise = browserObj.newPage();
    return browserTabOpenPromise;
}).then(function(newTab){
    console.log("Hacker rank opened!");
    page = newTab
    let hkPageOpenPromise =
    newTab.goto(loginpage);
return hkPageOpenPromise;
}).then(function(){
    let waitForElementPromise = page.waitForSelector("#input-1",
    { visible: true });
    return waitForElementPromise;
}).then(function(){
    let elemClickPromise = page.click("#input-1");
    return elemClickPromise;
}).then(function(){
    let waitforTypingPromise = page.type("#input-1", mail_id);
    console.log("Email Id Typing!");
    return waitforTypingPromise;
}).then(function(){
    let elemClickPromise = page.click("#input-2", { delay: 100 });
    return elemClickPromise;
}).then(function(){
    let waitforTypingPromise = page.type("#input-2", pswd);
    console.log("Password Typing!");
    return waitforTypingPromise;
}).then(function(){
    let clickLoginPromise = page.click("button[data-analytics=\"LoginPassword\"]", { delay: 100 });
    console.log("Logged In!");
    return clickLoginPromise;
}).then(function(){
    let waitForAlgorithm = page.waitForSelector("div[data-automation=\"algorithms\"", { visible: true });
    return waitForAlgorithm;
}).then(function(){
    let clickonTopicPromise = page.click("div[data-automation=\"algorithms\"");
    return clickonTopicPromise;
}).then(function(){
    let waitForWarmUP = page.waitForSelector("input[value = 'warmup']", { visible: true });
    return waitForWarmUP;
}).then(function(){
    let clickOnWarmUP = page.click("input[value = 'warmup']");
    return clickOnWarmUP;
}).then(function(){
    let waitForButtons = page.waitForSelector(".challenge-submit-btn", { visible: true });
    return waitForButtons;
}).then(function () {
    // page element -> cheerio 
    let arrOfSoveProblmbtn = page.$$(".challenge-submit-btn");
    console.log("Arr of solve problmes buttons : ", arrOfSoveProblmbtn);
    return arrOfSoveProblmbtn;
}).then(function (allElem) {
    let elementWillBeclickedPromise = allElem[1].click({ delay: 100 });
    console.log("Choosing 2nd question from arr");
    return elementWillBeclickedPromise;
}).then(function(){
    let waitForElement = page.waitForSelector(".overflow-guard", { visible: true });
    return waitForElement;
}).then(function(){
    let codingAreaClick = page.click(".overflow-guard");
    return codingAreaClick;
}).then(function(){
})