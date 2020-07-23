import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // public products = [
  //   {
  //     id:1,
  //     name:'egg',
  //     category:'Food',
  //     description:'lorem food egg',
  //     price:'0.6'
  //   },
  //   {
  //     id:2,
  //     name:'egg',
  //     category:'Food',
  //     description:'lorem food egg',
  //     price:'0.6'
  //   }
  // ]

  public products = [];

  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.products = this.dataSvc.getAllProducts();
  }

}
