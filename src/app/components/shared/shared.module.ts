import { NgModule } from '@angular/core';
import { DropzoneDirective } from 'src/app/core/directives/dropzone.directive';

@NgModule({
    declarations: [
        DropzoneDirective
    ],
    imports: [],
    exports: [
        DropzoneDirective
    ]
})
export class SharedModule { }
