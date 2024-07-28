import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top', // Scroll to top on navigate
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideClientHydration(),
  ],
};
