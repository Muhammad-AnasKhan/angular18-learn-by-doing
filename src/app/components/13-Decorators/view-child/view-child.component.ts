import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../ReuseableComponents/button/button.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('inputRef') inputRef!: ElementRef;
  @ViewChild(ButtonComponent) childComponent!: ButtonComponent;
  accessInput(){
    console.log(this.inputRef.nativeElement);
  }
  accessChildComponent(event:any){
    console.log(this.childComponent);
  }
}