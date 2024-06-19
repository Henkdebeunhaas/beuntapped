export const addNewBeerQuery = `insert into beer(brewery, style, alcoholPercentage) values(?,?,?);`;

export const getAllBeerQuery = `select * from beer`;

export const getSingleBeerQuery = `select * from beer where id=?`;

export const deleteSingleBeerQuery = `delete from beer where id=?`;