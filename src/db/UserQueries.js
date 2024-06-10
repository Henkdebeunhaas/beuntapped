export const createUserQuery = `insert into user(email, username, password) values(?,?,?)`;

export const getSingleUserLoginQuery = `select * from user where email=?`;

export const singleUserQuery = `select id, email, username from user where email=?`
export const getAllUsersQuery = `select id, email, username from user`;