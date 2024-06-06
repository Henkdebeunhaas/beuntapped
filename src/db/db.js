import Database from 'better-sqlite3';

const createUserTable = `create table if not exists user (
    id integer primary key autoincrement,
    email text not null,
    username text not null,
    password text not null,
    constraint email_unique unique(email)    
)`;

const createBeerTable = `create table if not exists beer (
    id integer primary key autoincrement,
    brewery text not null,
    style text not null,
    alcoholPercentage integer not null
)`;

const createRatingTabel = `create table if not exists rating
(
    id integer primary key autoincrement,
    userid integer not null references user,
    beerid integer not null references beer,
    rating integer not null,
    flavourprofiles text
);`

let db
try {
    db = new Database('db/beunTapped.sqlite');
    db.prepare(createUserTable).run();
    db.prepare(createBeerTable).run();
    db.prepare(createRatingTabel).run();
} catch (e){
    console.error('Error while initializing db', e);
    throw e;
}

export default db;