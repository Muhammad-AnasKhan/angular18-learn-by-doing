import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonText: string = 'Click me';
  @Output() alertEvent = new EventEmitter<string>();
  alertClick(){
    this.alertEvent.emit('Alert from button component');
  }
}
