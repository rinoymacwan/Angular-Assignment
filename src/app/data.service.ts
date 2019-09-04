import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ConcatSource } from 'webpack-sources';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static idMax: number;
  listOfEmployees: Employee[];
  private productUrl = 'employees.json';

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: max-line-length
    this.listOfEmployees = [];
    // tslint:disable-next-line: max-line-length
    this.listOfEmployees.push(new Employee(1, 'Rinoy', 'Macwan', 'rm@gmail.com', 9874563210, 'Monalisa, Manjalpur, Vadodara', 'rm2019', 'Promact2019', 'Male', 'Postgraduate', '0 - 2 years', ['C/C++', 'Java']));
    // tslint:disable-next-line: max-line-length
    this.listOfEmployees.push(new Employee(2, 'Yonir', 'Nawcam', 'mr@gmail.com', 9874563210, 'Monalisa, Manjalpur, Vadodara', 'rm2019', 'Promact2019', 'Male', 'Postgraduate', '0 - 2 years', ['C/C++', 'Python']));
    DataService.idMax = 2;
  }

  getById(id: number): Employee {
    return this.listOfEmployees.find(x => x.id === id);
  }
  /*
  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data)))
      );
  }
  */
  getAllEmp(): Employee[] {
    return this.listOfEmployees;
  }
  /*
  addEmployee(emp: Employee): Observable<Employee> {
    this.listOfEmployees.push(emp);
    return of(this.getById(this.listOfEmployees[0].id));
  }*/
  updateEmp(emp: Employee): void {

    const k = this.listOfEmployees.find(x => x.id === emp.id);
    const y = this.listOfEmployees.indexOf(k);
    this.listOfEmployees[y] = emp;
  }
  addEmp(emp: Employee): void {
    emp.id = DataService.idMax++;
    let len = this.listOfEmployees.push(emp);
  }
}
