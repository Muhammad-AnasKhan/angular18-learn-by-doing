import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  constructor(private router: Router){

  }

  isDiv1Visible:Boolean = false
  isDiv2Visible:Boolean = false

  num1:string = ""
  num2:string = ""

  isChecked:boolean = false

  stateSelected:string = ''

  cityArray: string [] = ['Multan', 'Lahore', 'Karanchi']

  studentObj: any[] = [
    {studid:1, name: "Ali", city: "Multan", isActive:false},
    {studid:2, name: "Aleena", city: "Lahore", isActive:true},
    {studid:3, name: "Zain", city: "Karanchi", isActive:false}
  ]

  showDiv1() {
    this.isDiv1Visible = true
  }
  hideDiv1() {
    this.isDiv1Visible = false
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible
  }
  moveToAttrRoute(){
    this.router.navigateByUrl('attr-directive')
  }
}
