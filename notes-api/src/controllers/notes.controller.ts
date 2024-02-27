import {Request, Response, NextFunction } from 'express';
import { Note } from '../models/Note';
import notesDao from '../db/notesDao';



const controller  = {
    list : (req:Request<{}, Note[], Note>, res:Response, next:NextFunction) => {
        const notes = notesDao.list();
        res.send(notes);
    },
    create : (req:Request<{}, Note, Note>, res:Response<Note>, next:NextFunction) => {
        const newNote = notesDao.create(req.body);
        res.send(newNote);
    },
    update: (req:Request<{}, Note[], Note>, res:Response, next:NextFunction) => {
        const newNote = notesDao.update(req.body);
        if(newNote){
            res.send(newNote);
        }else{
            res.status(204).send();
        }
        
    },
    delete: (req:Request, res:Response, next:NextFunction) => {
        const { id } = req.params;
        notesDao.del(Number(id))
        res.status(204).send();
        
    },
    getById : (req:Request, res:Response, next:NextFunction) => {
        const { id } = req.params;
        const findNote = notesDao.findById(Number(id));
        res.send(findNote);
    }
};

export default controller;