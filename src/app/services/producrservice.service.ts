import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProducrserviceService {

  constructor(private http:HttpClient) { }
  saveproducts(product:any[]){
   return this.http.put('https://manage-products-cf548-default-rtdb.firebaseio.com/product.json',product );
  }
  FetchData(){
    return this.http.get('https://manage-products-cf548-default-rtdb.firebaseio.com/product.json');
  }
}
