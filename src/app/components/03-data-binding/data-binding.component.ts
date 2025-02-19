import { Component, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  course : string = "Angular 18"
  inputType:string = "checkbox"
  MyClassName:string = "bg-primary"
  isPakistani:boolean = true
  constructor(){

  }
  firstName = signal('Muhammad Anas')
  showAlert(message:string){
    alert(message)
  }

  changeCourseName(){
    this.course = "React JS"
    this.firstName.set('Ali')
  }
}
