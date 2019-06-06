import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    UploadTaskComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class AdminModule { }
