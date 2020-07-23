import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id:1,
      name:'egg',
      category:'Food',
      description:'lorem food egg',
      price:'0.6'
    },
    {
      id:2,
      name:'Coca Cola',
      category:'Drink',
      description:'lorem drink coca',
      price:'1.3'
    },
    {
      id:3,
      name:'Biscoff Cookies',
      category:'Food',
      description:'lorem food cookies',
      price:'1.5'
    }
  ]

  getAllProducts(){
    return this.products
  }

  getProductById(id){
    return this.products.filter(
      (product) => product.id == id
    );
  }

}
