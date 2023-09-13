import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { Sigunp } from '../../../../shared/interfaces/signup.interface';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
   signupForm: FormGroup;
   submitted = false;

   constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private signupSer: SignupService,
      private authSer: AuthService
   ) {
      this.signupForm = this.formBuilder.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         terms: ['', Validators.required]
      });
   }

   get formCntl() {
      return this.signupForm.controls;
   }

   onSubmit() {
      this.submitted = true;
      if (this.signupForm.valid) {
         const reqData: Sigunp = {
            firstName: this.signupForm.controls['firstName'].value,
            lastName: this.signupForm.controls['lastName'].value,
            email: this.signupForm.controls['email'].value,
            terms: this.signupForm.controls['terms'].value
         };
         this.signupSer.signUp(reqData as Sigunp).subscribe((response: any) => {
            if (response.status) {
               this.authSer.isRegister = true;
               this.router.navigate(['/home']);
            }
         });
      }
   }
}
