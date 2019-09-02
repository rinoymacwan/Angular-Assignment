import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'learning';
  str: string;
  emp: Employee;
  ngOnInit(): void {
    this.str = 'wertttt';
    this.emp = new Employee();
    this.emp.firstName = 'yeahh';
  }
  func(): void {
    console.log(this.str);
  }
  func1(): void {
    console.log(this.emp.firstName);
  }
  get diagnostic() { return JSON.stringify(this.emp); }
}
