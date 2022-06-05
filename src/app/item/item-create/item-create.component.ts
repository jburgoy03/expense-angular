import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item: Item = new Item();

  constructor(
    private itesvc: ItemService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.item);
    this.itesvc.create(this.item).subscribe({
      next: (res) => {
        console.debug("Item Created");
        this.router.navigateByUrl("/item/list")
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
