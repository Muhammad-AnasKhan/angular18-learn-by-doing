import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bs-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bs-alert.component.html',
  styleUrl: './bs-alert.component.css'
})
export class BsAlertComponent {
  @Input() alertType: string = 'alert-primary';
  @Input() alertText: string = 'primary alert';
}
