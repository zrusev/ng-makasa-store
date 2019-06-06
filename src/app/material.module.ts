import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {
  MatSnackBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatListModule,
  MatSidenavModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    MatCarouselModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    MatCarouselModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
