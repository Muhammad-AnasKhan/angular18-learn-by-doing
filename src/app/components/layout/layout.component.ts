import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericServiceService } from '../../services/generic-service/generic-service.service';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);
  genericService = inject(GenericServiceService); 
  userEmail = '';
  role = '';
  constructor() {
    this.userEmail = localStorage.getItem('userEmail') || '';
  }
  onRoleChange(event: any) {
    debugger;
    this.genericService.onRoleChange$.next(event.target.value); // setting subject value
    this.genericService.role$.next(event.target.value);// setting behaviour subject value
  }
  logOff() {
    localStorage.removeItem('userEmail');
    this.router.navigateByUrl('/login');
  }
}
