import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { AddKegComponent } from './add-keg.component';
import { EditKegComponent } from './editable-list.component';
import { PosComponent } from './pos.component';
import { BeerTypePipe } from './beertype.pipe';
import { UniquePipe } from './uniquevalues.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, KegListComponent, AddKegComponent, EditKegComponent, PosComponent, BeerTypePipe, UniquePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
