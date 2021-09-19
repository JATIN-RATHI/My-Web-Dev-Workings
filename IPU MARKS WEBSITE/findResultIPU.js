// let website = "https://ipuranklist.com/";       --->> website home page
// var course = function tellme()
// {
// var choice = document.getElementById("course").value;
// return choice;
// }
let course = 1;
let CollegeName = 'VIPS';    
let batchYear = '19';
let rollno = "00617702019";
let pup = require("puppeteer");
let browserStartPromise = pup.launch({
    // visible 
    headless: false,
    // type 1sec // 
    slowMo: 200,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});

let page, browser;
browserStartPromise
    .then(function (browserObj) {
        console.log("Browser opened");
        // new tab 
        browser = browserObj
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    }).then(function (newTab) {
        page = newTab
        console.log("new tab opened ")
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function()
    {
        let openIpuRankListWebsite = page.type("input[title='Search']", "IPU rank list");        
        console.log("searching.....!");
        return openIpuRankListWebsite;
    }).then(function(){
        let enterWillBeDonePromise = page.keyboard.press('Enter', { delay: 100 });
        console.log("Landed on search result page....!");
        return enterWillBeDonePromise;
    }).then(function(){
        console.log("-->wait for IPU rank list to be visible");
        let waitForElementPromise = page.waitForSelector(".LC20lb.DKV0Md", { visible: true });
        return waitForElementPromise;
    }).then(function(){
        console.log("Click on --> Website link");
        let clickOnWebsiteLink = page.click(".LC20lb.DKV0Md");
        return clickOnWebsiteLink;
    }).then(function(){
        console.log("-->wait for Course list element be visible");
        let waitForElementPromise = page.waitForSelector(".nav-link.dropdown-toggle", { visible: true });
        return waitForElementPromise;
    }).then(function(){
        let clickOnCourseList = page.click(".nav-link.dropdown-toggle");
        console.log("--> Course list expanded!");
        return clickOnCourseList;
    }).then(function(){
        console.log("-->wait for Course list element be visible");
        let waitForElementPromise = page.waitForSelector("a.dropdown-item", { visible: true });
        return waitForElementPromise;
    }).then(function () {
        let allLisPromise = page.$$("a.dropdown-item");
        return allLisPromise;
    }).then(function (allElem) {
        let elementWillBeclickedPromise = allElem[course].click({ delay: 100 });             //course
        // console.log("---> course no. ", course);
        return elementWillBeclickedPromise;
    }).then(function(){
        console.log("-->wait for College list element be visible");
        let waitForElementPromise = page.waitForSelector("#college", { visible: true });
        return waitForElementPromise;
    }).then(function(){
        let clickOncollegeList = page.click("#college");
        return clickOncollegeList;
    }).then(function () {
        let clickOnSelectedCollege = page.select('select[name="college"]', CollegeName);   //collegename
        console.log("College Selected !");
        return clickOnSelectedCollege;
    }).then(function(){
        let clickOnYearList = page.click("#batch");
        console.log("-->  Year Dropdown list opened!")
        return clickOnYearList;
    }).then(function () {
        let clickOnSelectedCollege = page.select('select[name="batch"]', batchYear);         //batch
        console.log("Year Selected !");
        return clickOnSelectedCollege;
    }).then(function(){
        let searchButtonClick = page.click(".btn.btn-dark");
        return searchButtonClick;
    }).then(function(){
        let waitForSearchRollNo = page.waitForSelector("#search",  { visible: true });
        return waitForSearchRollNo;
    }).then(function(){
        let inputtingRollNo = page.type("#search", rollno);        
        console.log("Typing Roll number.....!");
        return inputtingRollNo;
    }).then(function(){
        let enterWillBeDonePromise = page.keyboard.press('Enter', { delay: 100 });
        console.log("Showing search results....!");
        return enterWillBeDonePromise;
    }).then(function(){
        let clickOnResult = page.click(".ng-star-inserted .limit-char");
        console.log("Opening... preferred result");
        return clickOnResult;
    }).then(function(){
        let takeScreeshot = page.screenshot({path: "screenshot.jpg"});
        console.log("Took screenshot...!");
        return takeScreeshot;
    }).then(function(){
        console.log("Closing Browser in 5min....!");
        setTimeout(() => { browser.close(); }, 300000);    //5min = 60000sec * 5min
    })
