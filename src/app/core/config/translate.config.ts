import { TranslateModuleConfig, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translateConfig: TranslateModuleConfig = {
    loader: {
      provide: TranslateLoader,
      useFactory: LoaderFactory,
      deps: [HttpClient]
    }
};

export function LoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
