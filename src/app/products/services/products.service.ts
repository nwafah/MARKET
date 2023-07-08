import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(category?:any){
    if(category){
      return this.http.get(environment.baseAPI+"products/category/"+category);
    }else
    {
    return this.http.get(environment.baseAPI+"products");
    }
  }

  getAllCategories(){
    return this.http.get(environment.baseAPI+"products/categories");
  }
}
