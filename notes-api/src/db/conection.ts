import { Database } from "sqlite3";

const db = new Database('./notes.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
    }
});

const initDB = (db:Database) => {
    
    db.exec(`
    DROP TABLE IF EXISTS notes;
    CREATE TABLE notes 
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(100) NOT NULL,
        note VARCHAR(1000) NOT NULL,
        createdAt DATETIME ,
        lastUpdate DATETIME
    );
    INSERT INTO notes(title, note, createdAt) values ('TEST', 'NOTES', ${Date.now()} );

    `, error => {
        if(error){
            console.log(error);
        }
    });

}
initDB(db);
export default db;