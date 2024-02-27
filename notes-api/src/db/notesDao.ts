import { RunResult } from "sqlite3";
import { Note } from "../models/Note"
import db from "./conection"

const notes: Note[] = [
];
let id = 0;


const create = (note: Note): Note => {
    note.createdAt = new Date();
    note.lastUpdate = note.createdAt;
    note.id = ++id;
    notes.push(note);
    return note;
}

const list = (): Note[] => {
    return notes;
}

const del = (id: Number) => {
    const index = notes.findIndex(note => note.id === id);
    if (index >= 0) {
        notes.splice(index, 1);
        return true;
    }
    return false;
}

const findById = (id:Number): Note |null => { 
    const index = notes.findIndex(note => note.id === id);
    if (index >= 0) {
        return notes[index];
    }
    return null;
};

const update = (note:Note) => {
    const index = notes.findIndex(item => item.id === note.id);
    if (index >= 0) {
        const savedNote = notes[index];
        note.createdAt = savedNote.createdAt;
        note.lastUpdate = new Date();
        notes.splice(index, 1, note);
        return note;
    }
    return null;
}

// const create = async (note:Note) :Promise<Note> => {
//     note.createAt = new Date();
//     note.lastUpdate = note.createAt;
//     return new Promise<Note>((resolve, reject) => {
//     db.run(

//             'INSERT INTO notes(title, note) values (?, ?);',
//             [note.title, note.note], 
//             (result: RunResult, err: Error | null) => {
//                 if(err){
//                     console.log(err);
//                     reject(err);
//                 }
//                 console.log(`Inserted row with id: ${result.lastID}`);
//                 note.id = result.lastID;
//                 resolve(note);

//             });
//     });

// };

// const list = async ():Promise<Note[]> => {
//     return new Promise<Note[]>((resolve, reject) => {
//         db.all('SELECT * FROM notes', 
//         [],
//         (err, rows:Note[]) => {
//             if(err){
//                 reject(err);
//             }
//             resolve(rows);
//         })
//     })
// }


export default { create, list, del, update, findById };