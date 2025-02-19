import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NotAvailblePipe } from '../../CustomPipes/not-availble.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, NotAvailblePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  name : string = "test value"
  date : Date = new Date()

  student: any = {
    "name": "Ali",
    "age": 22,
    "city": "Islamabad",
    "status" : ''
  }

  currentTime : Observable<Date> = new Observable<Date>
  constructor(){
    this.currentTime = interval(1000).pipe(map(()=> new Date()))
  }
}
