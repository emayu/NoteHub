import { Injectable } from '@angular/core';
import { Note } from '@data/model/Note';
import { CRUDService } from './crudservice';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService extends CRUDService<Note, Number> {

  constructor(private httpClient:HttpClient) { 
    super("http://localhost:3000/notes-api/v1/notes", httpClient);
  }
}
