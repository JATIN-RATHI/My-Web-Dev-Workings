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
let bowler = "";
let highestwkt = 0;

function dataExtractor(html)
{
    let searchTool = cheerio.load(html);
    // selector
    let bowlers = searchTool(".table.bowler tbody tr");
    // console.log(bowlers);
    for(let i = 0; i < bowlers.length; i++)
    {
        let cols = searchTool(bowlers[i]).find("td");
        let name = searchTool(cols[0]).text();
        let wickets = searchTool(cols[4]).text();

        // console.log("NAME : ", name , "\nWickets : ", wickets);
        if(wickets >= highestwkt)
        {
            bowler = name;
            highestwkt = wickets;
        }
    }
    console.log("Highest Wicket : ", highestwkt , "\n\tby ", bowler);
}