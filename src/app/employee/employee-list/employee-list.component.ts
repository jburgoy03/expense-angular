import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  searchCriteria: string = "";

  constructor(
    private emplsvc: EmployeeService
  ) { }

  ngOnInit(): void {
    this.emplsvc.list().subscribe({
      next: (res) => {
        console.debug("Employee:", res);
        this.employees = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

