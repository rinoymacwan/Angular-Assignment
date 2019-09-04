import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  listOfEmployees: Employee[];
  msg: string;
  flag: boolean;
  constructor(private dataService: DataService, private router: Router) {

    if (this.router.getCurrentNavigation().extras.state != null)
    {
      this.flag = true;
      this.msg = this.router.getCurrentNavigation().extras.state.msg;
      console.log(this.msg);
    } else{
      this.flag = false;
      console.log("asdasd");
    }
   }

  ngOnInit(): void {
    this.listOfEmployees = this.dataService.getAllEmp();
    // console.log(this.listOfEmployees[0].firstName);
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
    if (confirm('Are you sure you want to delete this employee?')) {
      this.dataService.delete(id);
    }
  }
}
