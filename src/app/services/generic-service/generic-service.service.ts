import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {
  //subject
  public onRoleChange$ = new Subject<string>();
  // behaviour subject
  public role$ = new BehaviorSubject<string>("");
  constructor() { }
}
