import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"; //for the NgModule
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';
import {HttpClientModule} from "@angular/common/http";
//import {AppRoutingModule} from "./app-routing.module";

import {ListboxModule} from "primeng/listbox";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListboxModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    TableModule,
    CheckboxModule,
    HttpClientModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
