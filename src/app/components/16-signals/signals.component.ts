import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  firstNameVar = 'John';
  firstName = signal('John');
  lastName = signal('Doe');

  number = signal<number>(1);

  // computed is used to create a derived signal, automatically updates when the source signals change
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`); 

  list = signal<string[]>(['item1', 'item2', 'item3']);

  obj = signal({name: 'John', age: 30});

  //constructor is used to set the initial value of the signal
  constructor(){
    setTimeout(() => {
      this.firstNameVar = 'Jane';
      //this.firstName.set('Jane');
    }, 5000);
  }

  updateFirstNameVar(){
    this.firstNameVar = 'Jane';
  }
  updateFirstNameSignal(){
    this.firstName.set('Jane');
  }

  updateLastNameSignal(){
    this.lastName.set('Smith');
  }

  updateListSignal(){
    this.list.set([...this.list(), 'item4']);
  }
  updateObjSignal(){
    this.obj.set({...this.obj(), age: 31});
  }
}
