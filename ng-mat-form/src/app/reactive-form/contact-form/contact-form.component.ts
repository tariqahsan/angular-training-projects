import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

 profileForm = this.formBuilder.group({
   firstName:['',[Validators.required]],
   lastName:['',[Validators.required]],
   address:['',[Validators.required]],
   dob:['',[Validators.required]],
   gender:['',[Validators.required]]
 });

 saveForm(){
  //if(this.profileForm.valid){
    // console.log('Profile form data :: ', this.profileForm.value);
    console.log('Profile form data :: ', this.profileForm);
  //}
}
  ngOnInit(): void {
  }

}
