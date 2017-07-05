import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { AddKegComponent } from './add-keg.component';
import { EditKegComponent } from './editable-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, KegListComponent, AddKegComponent, EditKegComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
