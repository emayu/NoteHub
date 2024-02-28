import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesService } from '@data/services/notes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotesComponent } from '@modules/notes/notes.component';
import { NotesCreateComponent } from '@modules/notes/views/notes-view/notes-view.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    FormsModule,
    NgbModule,
    NgbDropdownModule
    
  ],
  providers: [NotesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
