import { Component } from '@angular/core';
import { BsAlertComponent } from '../../ReuseableComponents/bs-alert/bs-alert.component';
import { ButtonComponent } from '../../ReuseableComponents/button/button.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [BsAlertComponent, ButtonComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  alertClick(data:any){
    alert(data);
  }
}
