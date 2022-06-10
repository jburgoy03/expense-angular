import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { ExpenseLine } from '../expenseline.class';
import { ExpenselineService } from '../expenseline.service';

@Component({
  selector: 'app-expenseline-edit',
  templateUrl: './expenseline-edit.component.html',
  styleUrls: ['./expenseline-edit.component.css']
})
export class ExpenselineEditComponent implements OnInit {

  expenseline!: ExpenseLine;
  items!: Item[];

  constructor(
    private explsvc: ExpenselineService,
    private router: Router,
    private route: ActivatedRoute,
    private itemsvc: ItemService
  ) { }

  save(): void {
    console.debug("B4:", this.expenseline);
    this.explsvc.change(this.expenseline).subscribe({
      next: (res) => {
        console.debug("Expenseline edited");
        this.router.navigateByUrl("/exp/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params["id"];
    this.explsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.expenseline = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
