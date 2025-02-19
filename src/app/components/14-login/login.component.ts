import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  userObj:any = {
    userEmail:"",
    password:""
  }

  showErrors = false;
  loginError = '';

  loginUser(){
    this.showErrors = true;
    if (!this.userObj.userEmail || !this.userObj.password) {
      return;
    }
    debugger
    if (this.userObj.userEmail == "admin" && this.userObj.password == "admin") {
      //alert("Login Successfull")
      localStorage.setItem('userEmail', this.userObj.userEmail);
      this.router.navigate(["attr-directive"])
    } else {
      this.loginError = 'Invalid credentials';
    }
  }
}
