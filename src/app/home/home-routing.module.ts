import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from "./body/body.component";
import { ItemComponent } from "./item/item.component";
import { CartComponent } from "./cart/cart.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const routes: Routes = [{
    path: "", redirectTo:"/home", pathMatch: 'full'
}, {
    path: "home", component: BodyComponent
}, {
    path: "item/:name",  component: ItemComponent
}, {
    path: "cart", component: CartComponent
}, {
    path: '**', component: PageNotFoundComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }