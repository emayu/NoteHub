import { Component } from '@angular/core';
import { Note } from '@data/model/Note';
import { NotesService } from '@data/services/notes.service';

@Component({
  selector: 'notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent {

 constructor(private notesService:NotesService){}

note:Note = {
  id: null,
  title: "",
  note: "",
  lastUpdate: null,
  createdAt: null
};



create(){
  this.notesService
  .save(this.note)
  .subscribe({
    next: noteCreated =>{
      console.log('created', noteCreated);
      this.note = {
        id: null,
        title: "",
        note: "",
        lastUpdate: null,
        createdAt: null
      };
    },

  })
}
}