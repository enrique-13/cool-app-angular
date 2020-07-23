import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  public product:any = {};

  // public product = {
  //   id:1,
  //   name:'egg',
  //   category:'Food',
  //   description:'Lorem egg',
  //   price:1.2
  // }

  /**
   * @param route // inyectamos las rutas en el constructos
   * @param dataSvc // Al igual que las rutas inyectamos los datos del servicio
   */
  constructor(
      private route:ActivatedRoute,
      private dataSvc:DataService,
      private location:Location
    ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
    // console.log('El id del producto es: ', productId);
  }

  onGoBack(): void {
    this.location.back();
  }

}
