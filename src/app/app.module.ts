import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';
import { ChecklistModule } from 'angular-checklist';
import { RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ChecklistModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'emp-list', component: EmpListComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'employees/:id', component: EmployeeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
