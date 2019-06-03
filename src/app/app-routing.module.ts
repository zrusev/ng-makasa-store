import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/identity/account/account.component';
import { ProfileComponent } from './components/identity/profile/profile.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { AdminComponent } from './components/identity/admin/admin.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
