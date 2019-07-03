import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipsInputComponent } from './chips-input/chips-input.component';

@NgModule({
  declarations: [
    AdminComponent,
    UploadTaskComponent,
    CreatePromotionComponent,
    ChipsInputComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
