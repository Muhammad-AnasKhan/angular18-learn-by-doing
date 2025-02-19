import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {
  div1BgClass: string = 'bg-primary'
  isDiv2Active:boolean = true
  isActive:boolean = true
  num1:string = ''
  num2:string = ''

  studentObj: any[] = [
    {studid:1, name: "Ali", city: "Multan", isActive:false,totalMarks:100},
    {studid:2, name: "Aleena", city: "Lahore", isActive:true,totalMarks:50},
    {studid:3, name: "Zain", city: "Karanchi", isActive:false,totalMarks:70},
    {studid:4, name: "Abid", city: "DGK", isActive:false,totalMarks:40}
  ]

  customStyle: any = {
    'background-color':'green',
    'color':'White',
    'padding':'10px',
    'border-radius' : '20px'
    
  }
  addRedClass(){
    this.div1BgClass = 'bg-danger'
  }
  addBlueClass(){
    this.div1BgClass = 'bg-primary'
  }
  toggleDiv2(){
    this.isDiv2Active =  ! this.isDiv2Active
  }
}
