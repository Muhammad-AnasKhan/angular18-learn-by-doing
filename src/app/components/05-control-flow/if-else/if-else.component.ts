import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  isDiv1Visible : boolean = false
  isDiv2Visible : boolean = false
  
  num1:string = ''
  num2:string = ''
  
  selectedState:string = ''

  showDiv1(){
    this.isDiv1Visible = true
  }
  hideDiv1(){
    this.isDiv1Visible = false

  }
  toggleDiv2(){
    this.isDiv2Visible =  ! this.isDiv2Visible
  }

}
