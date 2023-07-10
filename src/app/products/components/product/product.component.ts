import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data:any={};
  @Output() selectedProduct=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product:any){
    this.selectedProduct.emit(product);
  }
}
