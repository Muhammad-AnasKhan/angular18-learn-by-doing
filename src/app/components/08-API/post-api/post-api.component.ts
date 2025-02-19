import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api/api-service.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  postRequestResponse:string = ""
  baseUrl :string = "https://localhost:7048/api"
  postObj : any = {
    "name": "",
    "email": ""
  }
  http = inject(HttpClient)
  apiService = inject(ApiService)
  Submit(){
    debugger
    this.apiService.postRequest(this.baseUrl, this.postObj).subscribe((res:any) => {
      console.log("response", res)
      if(res.status){
        this.postRequestResponse = res
      }
    })
    console.log("postObj",this.postObj)
  }
}
