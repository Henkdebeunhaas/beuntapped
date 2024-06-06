export const createUserQuery = `insert into user(email, username, password) values(?,?,?)`;

export const getSingleUserQuery = `select * from user where email=?`;

export const getAllUsersQuery = `select * from user`;