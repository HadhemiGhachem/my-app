import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  providers: [EmployeeService],

})
export class EmployeeListComponent implements OnInit {
  
  employees = [];

  errormsg : string;

   constructor(private employeeService: EmployeeService){}
     ngOnInit(){
      this.employeeService.getEmployees()
      .subscribe((resEmployeeData: any)  => this.employees = resEmployeeData,
      (resEmperror : any) => this.errormsg = resEmperror);
     }
}
