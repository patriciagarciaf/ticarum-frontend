import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "projects/product-lib/src/lib/services/product";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
  export class ProductService {
  
    constructor(public http: HttpClient) { }
  
    getAll(): Observable<Product []>{
      return <Observable<Product []>> this.http.get(`http://localhost:8080/api/v1/product`)
    }

    getProductById(id: string): Observable<Product>{
      return this.http.get<Product>(`http://localhost:8080/api/v1/product/${id}`);
    }
  }