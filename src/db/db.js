import Database from "better-sqlite3";

let db;
try{
    db = new Database('db/beunTapped.sqlite');
} catch (e){
    console.error('Error while initializing db', e);
    throw e;
}