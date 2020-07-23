import { Component, Input } from "@angular/core";

@Component({
    selector:'app-product',
    template:`
    <h2>
    Nombre: 
    <a [routerLink]="['/productos', product.id]">{{product.name}}</a>
    </h2>
    <div>Description: {{product.description}}</div>
    `
})
export class ProductComponent{
    @Input() product; //Para que funcione product dentro deltemplate
}