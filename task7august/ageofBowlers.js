//npm i request -> terminal
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
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
    let bowlers = searchTool(".table.bowler tbody tr");
    // console.log(bowlers);
    for(let i = 0; i < bowlers.length; i++)
    {
        let cols = searchTool(bowlers[i]).find("td");
        let anchorElements = searchTool(cols[0]).find("a");
        let linkinAnchor = anchorElements.attr("href");
        let fullLink = `https://www.espncricinfo.com/${linkinAnchor}`;
        request(fullLink, newCallBack);
    }
}

function newCallBack(error, response, html)
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
       getBirth(html);
   }
}

function getBirth(html)
{
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool(".player-car-description");
    let age = searchTool(headingsArr[2]).text();
    let name = searchTool(headingsArr[0]).text();
    console.log("Age of " , name, " : ", age);
}