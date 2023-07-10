import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  constructor(
    private productsService:ProductsService
  ) { }
  productsDS:any[]=[];
  categoriesDS:any[]=[];
  loader!:boolean;
  cartStorage:any[]=[];
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts(category?:any){
    this.loader=true;
    this.productsService.getAllProducts(category).subscribe((res:any) =>{
      this.productsDS=res;
      this.loader=false;
    },error=>{
      this.loader=false;
      alert(error);
    })
  }
  getAllCategories(){
    this.loader=true;
    this.productsService.getAllCategories().subscribe((res:any) =>{
      this.categoriesDS=res;
      this.loader=false;
    },error=>{
      this.loader=false;
      alert(error);
    })
  }
  selectCategory(category:any){
    this.getAllProducts(category.target.value);
  }

  addProductToCart(product:any){ 
    if("cart" in localStorage)
    {
      this.cartStorage=JSON.parse(localStorage.getItem("cart")!);
      let exist=this.cartStorage.find(item =>item.id==product.id);
      if(!exist){
        this.addToCart(product);
      }
    }
    else{
      this.addToCart(product);
    }
    
 
  }

  addToCart(product:any){
    this.cartStorage.push(product);
    localStorage.setItem("cart",JSON.stringify(this.cartStorage));
  }
 
}
