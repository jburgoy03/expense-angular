import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseLine } from 'src/app/expenseline/expenseline.class';
import { ExpenselineService } from 'src/app/expenseline/expenseline.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-review-list',
  templateUrl: './expense-review-list.component.html',
  styleUrls: ['./expense-review-list.component.css']
})
export class ExpenseReviewListComponent implements OnInit {

  expenses!: Expense[];
  expenseline!: ExpenseLine;
  exp!: Expense;

  constructor(
    private expsvc: ExpenseService,
    private route: ActivatedRoute,
    private router: Router,
    private explsvc: ExpenselineService
  ) { }
  
    ngOnInit(): void {
      this.expsvc.getReviewed().subscribe({
        next: (res) => {
          console.debug("Whatever:", res);
          this.expenses = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }


}
