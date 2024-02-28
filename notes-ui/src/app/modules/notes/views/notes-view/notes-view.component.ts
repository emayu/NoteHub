import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '@data/model/Note';
import { NotesService } from '@data/services/notes.service';

@Component({
  selector: 'notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesCreateComponent {


  @Input()
  textAction = "Create";

  @Output('onClickAction') onClickAction = new EventEmitter<Note>();
  @Output('onClickCancel') onClickCancel = new EventEmitter();

  constructor(private notesService: NotesService) { }

  @Input()
  note: Note = {
    id: null,
    title: "",
    note: "",
    lastUpdate: null,
    createdAt: null
  };



  launchAction() {
    console.log('data', this.note);
    this.onClickAction.emit(this.note);
  }

  cancelAction(){
    this.onClickCancel.emit();
  }

  }
