import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubstractionComponent } from './components/substraction/substraction.component';
import { AddComponent } from './components/add/add.component';
import { DivideComponent } from './components/divide/divide.component';
import { MultiplyComponent } from './components/multiply/multiply.component';

@NgModule({
  declarations: [
    AppComponent,
    SubstractionComponent,
    AddComponent,
    DivideComponent,
    MultiplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
