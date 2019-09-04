import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';
import { ChecklistModule } from 'angular-checklist';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ChecklistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
