import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { HomeRoutingModule } from "./home-routing.module";




@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, BodyComponent, ItemComponent, CartComponent],
  imports: [
    CommonModule, HomeRoutingModule
  ],
  exports:[
    HeaderComponent, FooterComponent, MenuComponent,BodyComponent,ItemComponent,
  ]
})
export class HomeModule { }
