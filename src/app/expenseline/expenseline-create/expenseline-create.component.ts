import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { ExpenseLine } from '../expenseline.class';
import { ExpenselineService } from '../expenseline.service';

@Component({
  selector: 'app-expenseline-create',
  templateUrl: './expenseline-create.component.html',
  styleUrls: ['./expenseline-create.component.css']
})
export class ExpenselineCreateComponent implements OnInit {

  expenseline: ExpenseLine = new ExpenseLine();
  items!: Item[];

  constructor(
    private explsvc: ExpenselineService,
    private router: Router,
    private route: ActivatedRoute,
    private itemsvc: ItemService
  ) { }

  save(): void {
    console.debug("B4:", this.expenseline);
    this.explsvc.create(this.expenseline).subscribe({
      next: (res) => {
        console.debug("Expense created");
        this.router.navigateByUrl("/exp/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.expenseline.expenseId = +this.route.snapshot.params["eid"]
  }

}
