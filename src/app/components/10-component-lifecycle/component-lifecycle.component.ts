import { Component } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './component-lifecycle.component.html',
  styleUrl: './component-lifecycle.component.css'
})
export class ComponentLifecycleComponent {
  constructor(){
    console.log("constructor()");
  }
  ngOnChanges(){
    console.log("ngOnChanges()");
  } 
  ngOnInit(){
    console.log("ngOnInit()");
  }
  ngDoCheck(){
    console.log("ngDoCheck()");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit()");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked()");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit()");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked()");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy()");
  }
}
