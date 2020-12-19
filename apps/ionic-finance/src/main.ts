import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { persistState } from '@datorama/akita';

import * as localForage from 'localforage';

localForage.config({
  driver: localForage.LOCALSTORAGE,
  name: 'Akita',
  version: 1.0,
  storeName: 'akita-storage'
});

persistState({ include: ['session', 'account'], storage: localForage });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
