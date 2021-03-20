import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from "./home/body/body.component";
import { ItemComponent } from "./home/item/item.component";
import { CartComponent } from "./home/cart/cart.component";

const routes: Routes = [
  {
    path: "home",
    component: BodyComponent
  },
  {
    path: "item/*",
    component: ItemComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
