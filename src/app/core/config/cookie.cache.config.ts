import { TranslateCacheConfig, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';
import { TranslateService } from '@ngx-translate/core';

export const cookieCacheConfig: TranslateCacheConfig = {
    cacheService: {
        provide: TranslateCacheService,
        useFactory: TranslateCacheFactory,
        deps: [ TranslateService, TranslateCacheSettings ]
      },
      cacheName: 'lang',
      cacheMechanism: 'Cookie',
  };


export function TranslateCacheFactory(translateService, translateCacheSettings) {
    return new TranslateCacheService(translateService, translateCacheSettings);
}
