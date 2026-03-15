import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor, loggerWarnInterceptor } from '../shared/tools/routes/titles/logger-intercetpor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loggerInterceptor, loggerWarnInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes)
  ],
};
