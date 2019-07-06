import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TranslateModule } from '@ngx-translate/core';

import { DropzoneDirective } from 'src/app/core/directives/dropzone.directive';
import { ListPromotionComponent } from '../list-promotion/list-promotion.component';
import { LanguageComponent } from './language/language.component';

import { NavigationService } from 'src/app/core/services/navigation.service';
import { LanguageService } from 'src/app/core/services/language.service';

import { translateConfig } from 'src/app/core/config/index.config';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DropzoneDirective,
        LanguageComponent,
        ListPromotionComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        TranslateModule.forChild(translateConfig),
        RouterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        DropzoneDirective,
        LanguageComponent,
        ListPromotionComponent,
        TranslateModule,
        RouterModule,
    ],
    providers: [
        NavigationService,
        LanguageService,
    ]
})
export class SharedModule { }
