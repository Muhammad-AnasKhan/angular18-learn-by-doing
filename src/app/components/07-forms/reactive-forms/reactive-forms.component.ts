import { JsonPipe } from '@angular/common';
import { jsDocComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  studForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(),
    userName: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    isAgreeToTerms: new FormControl(false)
  })
  formData: any;
  submit() {
    this.formData = this.studForm.value
  }

}

