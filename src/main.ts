import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// bootstrap: ön yükleyici
// AppComponent: Root Component
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
