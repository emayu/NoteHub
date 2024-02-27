import {Request, Response, NextFunction } from 'express';

export interface Note {
    id: number;
    title: string;
    note: string;
}

const notes: Note[] = [
    { id: 1, title: "test note", note:"notes"}
];
let id = 1;

const controller  = {
    list : (req:Request<{}, Note[], Note>, res:Response, next:NextFunction) => {
        res.send(notes);
    },
    create : (req:Request<{}, Note, Note>, res:Response<Note>, next:NextFunction) => {
        const note = req.body;
        console.log('received note', note)
        console.log('actual id', id)
        id++;
        note.id = id;
        notes.push(note) ;
        res.send(note);
    },
    update: (req:Request, res:Response, next:NextFunction) => {
        console.log("updating")
    },
    delete: (req:Request, res:Response, next:NextFunction) => {
        console.log("deleting");
        const { id } = req.params;
        const index = notes.findIndex( note => note.id === Number(id));
        if(index >= 0){
            notes.splice(index, 1);
            res.status(204).send();
        }
        res.status(200).send();
    }
};

export default controller;