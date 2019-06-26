import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsInputComponent } from './chips-input/chips-input.component';
import { ListPromotionComponent } from './promotions/list-promotion/list-promotion.component';

@NgModule({
  declarations: [
    AdminComponent,
    UploadTaskComponent,
    CreatePromotionComponent,
    ChipsInputComponent,
    ListPromotionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
