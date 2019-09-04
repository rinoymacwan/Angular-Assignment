import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  listOfEmployees: Employee[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listOfEmployees = this.dataService.getAllEmp();
    //console.log(this.listOfEmployees[0].firstName);
    /*
    this.dataService.getAll().subscribe(
      employees => {
        this.listOfEmployees =
      }
    ) */

  }
  get myFunc() {
    return JSON.stringify(this.listOfEmployees[0]);
  }
  delete(id: number): void {
    this.dataService.delete(id);
  }
}
