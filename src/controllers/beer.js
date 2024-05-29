import statusCodes from "http-status-codes";
//temp beer object
let beers = [{
        "brewery":"Hertog Jan",
        "style":"Blonde",
        "percentage":7
    },
    {
        "brewery":"Grolsch",
        "style":"Weizen",
        "percentage":6
    }];



export function getAllBeers(req, res){
    res.json(beers);
}

export function getSingleBeer(req, res){

}

export function addBeer(req, res){
    const beer = req.body;
    beers.push({"brewery":beer.brewery, "style":beer.style, "percentage":beer.percentage});
    res.sendStatus(statusCodes.CREATED);
}

