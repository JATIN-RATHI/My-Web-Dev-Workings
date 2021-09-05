//npm i request -> terminal
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";

let request = require("request");
request(url, callback);

function callback(error, response, html)
{
   if(error)
   {
       console.log(error); 
   }
   else if(response.statusCode == 404)
   {
       console.log("Page Not Found!");
   }
   else{
       dataExtractor(html);
   }
}

function dataExtractor(html)
{
    let searchTool = cheerio.load(html);
    // selector
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    // console.log(elemRepArr);
    let lastBallCall = searchTool(elemRepArr[0]).text();
    console.log(lastBallCall);
}