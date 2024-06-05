export const addNewBeerQuery = `insert into beer(brewery, style, alcoholPercentage) values(?,?,?);`;

export const getAllBeerQuery = `select * from beer`