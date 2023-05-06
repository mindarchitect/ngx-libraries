import {NgModule, APP_INITIALIZER, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAvatarLibTestComponent } from './ngx-avatar-lib-test/ngx-avatar-lib-test.component';
import { NgxAvatarLibModule, NgxAvatarLibConfiguration, LibConfigurationProvider } from "ngx-avatar-lib";

@Injectable({ providedIn: 'root' })
export class ConfigurationStore {
  private ngxAvatarLibConfiguration?: NgxAvatarLibConfiguration;

  setConfiguration(ngxAvatarLibConfiguration: NgxAvatarLibConfiguration): void {
    this.ngxAvatarLibConfiguration = ngxAvatarLibConfiguration;
  }

  getConfiguration(): NgxAvatarLibConfiguration {
    return <NgxAvatarLibConfiguration>this.ngxAvatarLibConfiguration;
  }
}

@Injectable({ providedIn: 'root' })
export class ConfigFromApp implements LibConfigurationProvider {
  constructor(private configurationStore: ConfigurationStore) {}

  get Configuration(): NgxAvatarLibConfiguration {
    return this.configurationStore.getConfiguration();
  }
}

export function initApp(configurationStore: ConfigurationStore) {
  return () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        configurationStore.setConfiguration({ property: 'Test2' });
        resolve();
      }, 2000);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NgxAvatarLibTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAvatarLibModule.forRoot({
      configuration: {
        provide: LibConfigurationProvider,
        useClass: ConfigFromApp
      }
    })
  ],
  providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: initApp,
        multi: true,
        deps: [ConfigurationStore]
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
