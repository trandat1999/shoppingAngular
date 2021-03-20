import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from "../itemservice.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  items: any;

  constructor(private itemService: ItemserviceService) {

  }

  ngOnInit(): void {
    this.items = this.itemService.findAll();
  }

}
