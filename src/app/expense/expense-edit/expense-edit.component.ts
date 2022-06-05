import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.class';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

  expense!: Expense;
  employees!: Employee[];
  back: boolean = false;

  constructor(
    private expsvc: ExpenseService,
    private emplsvc: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    save(): void {
      console.debug("B4:", this.expense);
      this.expsvc.change(this.expense).subscribe({
        next: (res) => {
          console.debug("Expense edited");
          this.router.navigateByUrl("/exp/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    ngOnInit(): void {
      let id: number = this.route.snapshot.params["id"];
      this.expsvc.get(id).subscribe({
        next: (res) => {
          this.back =! this.back;
          console.debug(res);
          this.expense = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
      this.emplsvc.list().subscribe({
        next: (res) => {
          console.debug(res);
          this.employees = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

} 
