import express from 'express';
import notesController from '../controllers/notes.controller';

const router = express.Router();



router.get('/notes', notesController.list);
router.get('/notes/:id', notesController.getById);
router.post('/notes', notesController.create)
router.delete('/notes/:id', notesController.delete);
router.put('/notes', notesController.update)

export default router;