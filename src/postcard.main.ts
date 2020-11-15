import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PostcardModule } from '@postcard/postcard.module';
import { environment } from '@env/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PostcardModule)
  .catch(err => console.error(err));
