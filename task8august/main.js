let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";  //main url of website
let request = require("request");
let cheerio = require("cheerio");
let AllMatchObj = require("./Allmatch");
// home page 
request(url, cb);
function cb(err, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractLink(html);
    }
}
function extractLink(html) {
    let $ = cheerio.load(html);
    let anchorElem = $("a[data-hover='View All Results']");
    let link = anchorElem.attr("href");
    // console.log(link);
    let fullLink = "https://www.espncricinfo.com" + link;
    // console.log(fullLink);
    AllMatchObj.gAlmatches(fullLink);
}