import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule
      //StoreModule.forRoot({ search: reducer }),
      //EffectsModule.forRoot([SearchApiEffects]),
      //StoreDevtoolsModule.instrument({
      //  maxAge: 25,
      //})
    ),
  ],
});
