import { Component } from '@angular/core';
import { GenericServiceService } from '../../../services/generic-service/generic-service.service';

@Component({
  selector: 'app-subject-behaviour-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject-behaviour-subject.component.html',
  styleUrl: './subject-behaviour-subject.component.css'
})
export class SubjectBehaviourSubjectComponent {
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
