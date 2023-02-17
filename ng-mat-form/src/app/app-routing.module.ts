import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './reactive-form/contact-form/contact-form.component';
import { RegistrationFormComponent } from './reactive-form/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'reactive/register', component: RegistrationFormComponent},
  { path: 'reactive/contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
