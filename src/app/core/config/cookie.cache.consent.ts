import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheConfig, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';

export const cookieCacheConfig: TranslateCacheConfig = {
    cacheService: {
        provide: TranslateCacheService,
        useFactory: (translateService, translateCacheSettings) => {
            return new TranslateCacheService(translateService, translateCacheSettings)
        },
        deps: [ TranslateService, TranslateCacheSettings ]
      },
      cacheName: 'lang',
      cacheMechanism: 'Cookie',
};
