import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employee.service";



@Component({
    selector: 'employee-detail',
    providers: [EmployeeService],                   

})

export class EmployeeDetailComponent implements OnInit {

    employees = [];
    errormsg : string;

    constructor(private employeeService : EmployeeService) {}

    ngOnInit(): void {
        this.employeeService.getEmployees()
        .subscribe(resEmployeeData => this.employees = resEmployeeData,
            resEmperror => this.errormsg = resEmperror
        );
    }
}