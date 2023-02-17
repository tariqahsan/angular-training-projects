import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email]],
      'name': [null, Validators.required],
      'password': [null, Validators.required]
  })

}

onSubmit() {
  console.log(this.formGroup);
}
}
