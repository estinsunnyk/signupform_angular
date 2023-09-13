import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
   { path: '', component: SignupComponent }
];

@NgModule({
   declarations: [
      SignupComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      RouterModule
   ]
})
export class LoginSignupModule { }
