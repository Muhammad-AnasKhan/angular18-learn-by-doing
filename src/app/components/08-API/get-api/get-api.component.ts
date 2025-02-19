import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api-service.service';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent implements OnInit{
  postsList : any [] = []
  productsList : any [] = []

  // HttpClient DI in constructor
  constructor(private http:HttpClient, private apiService:ApiService){

  }
  // things to work on page load
  ngOnInit(): void {
    //this.getAllPosts()
  }

  getAllPosts(){
    debugger
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response:any)=>{
      this.postsList = response
    })
  }
  getAllProducts(){
    debugger
    // invoking anguler service ---  (APIService.getAllPosts)
    this.apiService.getAllProducts().subscribe((response:any)=>{
      this.productsList = response
    })
  }
}
