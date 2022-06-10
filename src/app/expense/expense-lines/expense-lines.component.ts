import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseLine } from 'src/app/expenseline/expenseline.class';
import { ExpenselineService } from 'src/app/expenseline/expenseline.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-lines',
  templateUrl: './expense-lines.component.html',
  styleUrls: ['./expense-lines.component.css']
})
export class ExpenseLinesComponent implements OnInit {

  expense!: Expense;

  constructor(
    private expsvc: ExpenseService,
    private explsvc: ExpenselineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  
  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.expsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.expense = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
    ngOnInit(): void {
      this.refresh();
    }
  
  delete(line: ExpenseLine) {
    this.explsvc.remove(line.id).subscribe({
      next: (res) => {
        console.debug("Expense removed");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  submit(): void {
    this.expsvc.review(this.expense.id, this.expense).subscribe({
      next: (res) => {
        console.debug("Expense submitted");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
