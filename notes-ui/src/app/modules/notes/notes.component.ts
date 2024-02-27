import { Component, OnInit } from '@angular/core';
import { NotesService } from '@data/services/notes.service';
import { Note } from '@data/model/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent  implements OnInit{

//global memory data
  notesList : Note[] = [];
  
  constructor(private notesService:NotesService){}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.notesService.getAll()
     .subscribe(
      res => this.notesList = res
     )
  }

  deleteNote(id:number|null ){
    if(id){
      //this is for better ui experience
      let index = this.notesList.findIndex(note => note.id === id);
      this.notesList.splice(index, 1);
      this.notesService
      .delete(id)
      .subscribe({
        error : error => {
          console.error("error", error);
        }
      });
    }
  }

  performUpdateList(){
    this.getAllNotes();
  }

}
