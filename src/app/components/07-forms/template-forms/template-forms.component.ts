import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  studObj : any = {
    firstName  : "",
    lastName : "",
    userName : "",
    city : "",
    state : "",
    zip : "",
    isAgreeToTerms : false
  }
  formData : any = {}

  submit(){
    debugger;
    this.formData = this.studObj
  }
  reset(){
    debugger;
     this.studObj = {
      firstName  : "",
      lastName : "",
      userName : "",
      city : "",
      state : "",
      zip : "",
      isAgreeToTerms : false
    }
  }
}
