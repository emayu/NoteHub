import express from 'express';
import notesController from '../controllers/notes.controller';

const router = express.Router();



router.get('/notes-api/v1/note', notesController.list);
router.post('/notes-api/v1/note', notesController.create)
router.delete('/notes-api/v1/note/:id', notesController.delete);

export default router;