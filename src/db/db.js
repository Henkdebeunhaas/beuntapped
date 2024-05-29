import Database from "better-sqlite3";

let db;
try{
    db = new Database('beunTapped.sqlite');
} catch (e){
    console.error('Error while initializing db', e);
    throw e;
}


export default db;