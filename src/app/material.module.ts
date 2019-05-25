import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatFormFieldControl,
  MatTabsModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    MatCarouselModule,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    MatCarouselModule,
  ]
})
export class MaterialModule { }
