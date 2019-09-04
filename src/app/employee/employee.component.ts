import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


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
  /**
   *
   */
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
  }
  ngOnInit(): void {
    //this.emp = new Employee();
    const param = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(routeParams => {
      if (+routeParams.id > 0) {
        this.emp = this.dataService.getById(+param);
      } else {
        this.emp = new Employee();
      }
    });
    /*
    if (param)
    {
      this.emp = this.dataService.getById(+param);
      console.log('what???');
    } else
    {
      this.emp = new Employee();
    }
    */
    this.qualifications = ['Graduate', 'Postgraduate'];
    this.experienceList = ['0 - 2 years', '2 - 7 years', '7 years or more'];
    this.languagesList = ['C/C++', 'C#', 'Java', 'Python'];
  }


  onSubmit(form: NgForm): void {
    const param = this.route.snapshot.paramMap.get('id');
    console.log(JSON.stringify(this.emp));
    if (+param === 0){
      this.dataService.addEmp(this.emp);
      this.router.navigate(['/emp-list']);
    } else {
      this.dataService.updateEmp(this.emp);
      this.router.navigate(['/emp-list']);
    }
  }
}
