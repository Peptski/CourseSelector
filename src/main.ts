import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { reducer } from './app/search-page/data-access/reducers/search.reducer';
import { environment } from './environments/environment';
import { SearchApiEffects } from './app/search-page/data-access/effects/search-api.effects';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({ search: reducer }),
      EffectsModule.forRoot([SearchApiEffects]),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      })
    ),
  ],
});
