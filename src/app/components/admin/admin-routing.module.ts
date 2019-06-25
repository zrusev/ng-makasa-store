import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';

const routes: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'create', component: CreatePromotionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
