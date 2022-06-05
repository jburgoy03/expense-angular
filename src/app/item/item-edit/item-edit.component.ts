import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  item!: Item;

  constructor(
    private itesvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.item);
    this.itesvc.change(this.item).subscribe({
      next: (res) => {
        console.debug("Item Changed");
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params["id"];
    this.itesvc.get(id).subscribe({
      next: (res) => {
        console.debug("Item:", res);
        this.item = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
