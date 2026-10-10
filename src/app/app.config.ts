import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  AutoRefreshTokenService,
  provideKeycloak,
  UserActivityService,
  withAutoRefreshToken,
} from 'keycloak-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        realm: 'taskmanager',
        url: 'http://localhost:8080',
        clientId: 'frontend-auth',
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        pkceMethod: 'S256',
        redirectUri: window.location.origin + '/',
        enableLogging: true,
      },
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'logout',
          sessionTimeout: 1000,
        }),
      ],
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    AutoRefreshTokenService,
    UserActivityService,
    provideRouter(routes),
    provideHttpClient(),
  ],
};
