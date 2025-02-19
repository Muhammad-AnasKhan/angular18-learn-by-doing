import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
 
  cityArray: string [] = ['Multan', 'Lahore', 'Karanchi']
  number : string = ""
  selectedStud : string ="1"

  studentObj: any[] = [
    {studid:1, name: "Ali", city: "Multan", isActive:false},
    {studid:2, name: "Aleena", city: "Lahore", isActive:true},
    {studid:3, name: "Zain", city: "Karanchi", isActive:false}
  ]

}
