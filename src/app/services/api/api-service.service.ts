import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  http = inject(HttpClient)
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  postRequest(baseUrl:string, postObj:any){
    return this.http.post(`${baseUrl}/RestAPI`,postObj)
  }
}
