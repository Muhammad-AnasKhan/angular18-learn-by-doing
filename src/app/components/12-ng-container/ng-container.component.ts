import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent implements OnInit {
  private http = inject(HttpClient);
  postsList: any;
  isVisible = true;
  isGetApiCalling = false;



  items = ['Item 1', 'Item 2', 'Item 3'];
  user = {
    name: 'John Doe',
    role: 'Admin',
    lastLogin: new Date()
  };
  status = 'success';
  isLoggedIn = true;
  hasPermission = true;

  ngOnInit(): void {
    
  }

  getAllPosts(){
    this.isGetApiCalling = true;
    debugger
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response:any)=>{
      this.postsList = response
      this.isGetApiCalling = false;
    })
  }

}
