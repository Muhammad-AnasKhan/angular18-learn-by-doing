import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericServiceService } from '../../../services/generic-service/generic-service.service';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  // Create an Observable that emits some values
  messages: any[] = []; // Store emitted values here

  ngOnInit() {
    // Create the Observable
    const myObservable = new Observable((observer) => {
      setTimeout(() => observer.next('RxJs'), 1000); // Emit the first value after 1 second
      setTimeout(() => observer.next('Observable'), 2000); // Emit the second value after 2 seconds
      setTimeout(() => observer.next('in'), 3000); // Emit the second value after 2 seconds
      setTimeout(() => observer.next('Action'), 4000); // Emit the second value after 2 seconds
      setTimeout(() => observer.complete(), 5000);    // Finish the Observable after 3 seconds
    });

    // Subscribe to the Observable
    myObservable.subscribe({
      next: (value) => this.messages.push(value), // Store each value in the messages array
      complete: () => console.log('Observable complete!'),
    });

  }
  currentRole : string = ""
  role : string = ""
  constructor(private genericService: GenericServiceService) {
    // subscribing subject obs
    this.genericService.onRoleChange$.subscribe((role: string) => {
      this.currentRole = role;
    });
    // subscribing behaviour subject obs
    this.genericService.role$.subscribe((r:string)=>{
      this.role = r;
    })
  }
}
