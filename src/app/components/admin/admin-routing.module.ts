import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { ListPromotionComponent } from './promotions/list-promotion/list-promotion.component';

const routes: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'promotions/create', component: CreatePromotionComponent },
  { path: 'promotions/all', component: ListPromotionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
