import { Injectable } from '@angular/core';
import { isMethodSignature } from 'typescript';
interface item{
  name: string,
  price: number,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {


  items : item[] = [{
    name: "iphone1",
    price: 1100000,
    description: "iphone 1 abcd"
  },
  {
    name: "iphone2",
    price: 1200000,
    description: "iphone 2 abcd"
  },
  {
    name: "iphone3",
    price: 1300000,
    description: "iphone 3 abcd"
  },
  {
    name: "iphone4",
    price: 1400000,
    description: "iphone 4 abcd"
  },
  {
    name: "iphone5",
    price: 1500000,
    description: "iphone 5 abcd"
  },
  {
    name: "iphone6",
    price: 1600000,
    description: "iphone 6 abcd"
  }]

  findAll() {
    return this.items;
  }
  findByName(name:any){
    let itema;
    for(let itemx of this.items){
      if(itemx.name===name){
        itema=itemx;
        break
      }
    }
    return itema;
  }

  constructor() { }
}
