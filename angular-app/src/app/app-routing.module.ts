import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './shared/auth-guard.service';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
