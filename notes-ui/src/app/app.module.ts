import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesService } from '@data/services/notes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotesComponent } from '@modules/notes/notes.component';
import { NotesCreateComponent } from '@modules/notes/views/notes-create/notes-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [NotesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
