import { NgModule } from '@angular/core';
import { DropzoneDirective } from 'src/app/core/directives/dropzone.directive';
import { NavigationService } from 'src/app/core/services/navigation.service';

@NgModule({
    declarations: [
        DropzoneDirective
    ],
    imports: [],
    exports: [
        DropzoneDirective
    ],
    providers: [
        NavigationService
    ]
})
export class SharedModule { }
