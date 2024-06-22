export const insertNewReviewQuery = `insert into rating(userid, beerid, rating, flavourprofiles, description) values(?,?,?,?,?)`

export const getAllRatingsQuery = `select * from rating`;

export const getSingleRatingQuery = `select * from rating where id=?`

export const getAllRatingsFromUser = `select * from rating where userid=?`;

export const beerRatingInnerJoinQuery = `select rating.beerid, beer.brewery, beer.style, beer.alcoholPercentage, rating.description, rating.flavourprofiles, rating.rating
                                                from rating
                                                inner join beer on beer.id = rating.beerid`