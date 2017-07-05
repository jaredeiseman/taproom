import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KegListComponent }  from './keg-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, KegListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
