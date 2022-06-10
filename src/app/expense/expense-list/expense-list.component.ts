import { Component, OnInit } from '@angular/core';
import { ExpenseLine } from 'src/app/expenseline/expenseline.class';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses!: Expense[];
  expenselines!:ExpenseLine[];
  searchCriteria: string = "";
  sortColumn: string = "description";
  sortAsc: boolean = true;

  constructor(
    private expsvc: ExpenseService
  ) { }

  sortFn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  ngOnInit(): void {
    this.expsvc.list().subscribe({
      next: (res) => {
        for(let e of res) {
          e.employeeName = e.employee.name;
        }
        console.debug("Expense:", res);
        this.expenses = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
