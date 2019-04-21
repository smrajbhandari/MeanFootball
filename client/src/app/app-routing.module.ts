import { NgModule } from '@angular/core';

import { Routes, RouterModule,PreloadAllModules} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},   //     canActivate: [AuthGuardService] 
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations:[],
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
