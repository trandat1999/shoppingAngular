import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemserviceService } from "../itemservice.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item : any
  backHome(){
    window.history.back();
  }
  constructor(private activeRouter :ActivatedRoute, private itemService: ItemserviceService) {
    this.activeRouter.paramMap.subscribe(params=>{
      this.item= this.itemService.findByName(params.get("name"));
    })
   }

  ngOnInit(): void {
  }

}
