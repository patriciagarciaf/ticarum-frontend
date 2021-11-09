import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../../product/src/app/service/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  getAll(): Observable<Product []>{
    return <Observable<Product []>> this.http.get(`http://localhost:8080/api/v1/products`)
  }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/api/v1/products/${id}`);
  }
}