import { enableProdMode } from "@angular/core"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { applyPolyfills, defineCustomElements } from '@duetds/components/lib/loader';

import { AppModule } from "./app/app.module"
import { environment } from "./environments/environment"

applyPolyfills().then(() => {
  defineCustomElements(window)
});

if (environment.production) {
  enableProdMode()
}

/* if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  this.isSafari = true
} */

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
