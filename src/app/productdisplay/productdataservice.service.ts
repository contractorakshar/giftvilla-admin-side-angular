import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductdataserviceService {
  url:string="http://localhost:3000/product/";

  constructor(private _http:HttpClient) { }

  getAllProduct(){
    return this._http.get(this.url);
  }
  deleteProduct(pro_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + pro_id ,{headers:x});
  }
  addProduct(item)
  {
      return this._http.post(this.url,item);
  }
  /*getProductById(pro_id:number){
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + pro_id, { headers: x });
  }*/
  /*updateproduct(item){
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+item.pro_id,body,{ headers: x });
  }*/
}
