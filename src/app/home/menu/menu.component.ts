import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  Category=["quan ao",'dien thoai', 'laptop']
  constructor() { }

  ngOnInit(): void {
  }

}
