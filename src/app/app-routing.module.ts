import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   {
      path: 'home',
      loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
   },
   {
      path: 'signup',
      loadChildren: () => import('./modules/login-signup/login-signup.module').then((m) => m.LoginSignupModule)
   },
   { path: '**', redirectTo: 'not-found' },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
