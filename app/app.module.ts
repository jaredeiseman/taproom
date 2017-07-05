import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegComponent } from './keg.component';
import {BoardComponent } from './board.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, KegComponent, BoardComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
