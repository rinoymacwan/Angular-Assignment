import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  emp: Employee;
  qualifications: string[];
  experienceList: string[];
  languagesList: string[];
  list: string[];
  ngOnInit(): void {
    this.emp = new Employee();
    this.qualifications = ['Graduate', 'Postgraduate'];
    this.experienceList = ['0 - 2 years', '2 - 7 years', '7 years or more'];
    this.languagesList = ['C/C++', 'C#', 'Java', 'Python'];
  }


  onSubmit(form: NgForm): void {
    console.log(JSON.stringify(this.emp));
  }
}
