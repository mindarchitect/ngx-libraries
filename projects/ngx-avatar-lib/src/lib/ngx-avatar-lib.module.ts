import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxAvatarLibComponent } from './components/ngx-avatar-lib/ngx-avatar-lib.component';

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { ConfigurationProvider } from "./configuration/configuration.provider";
import { NgxAvatarLibConfigurationProvider } from "./configuration/ngx-avatar-lib-configuration.provider";
import { DefaultNgxAvatarLibConfigurationProvider } from "./configuration/default-ngx-avatar-lib-configuration-provider";

@NgModule({
    declarations: [
        NgxAvatarLibComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        NgxAvatarLibComponent
    ]
})
export class NgxAvatarLibModule {
    static forRoot(сonfigurationProvider: ConfigurationProvider = {}): ModuleWithProviders<NgxAvatarLibModule> {
        return {
            ngModule: NgxAvatarLibModule,
            providers: [
                сonfigurationProvider.provider || {
                    provide: NgxAvatarLibConfigurationProvider,
                    useClass: DefaultNgxAvatarLibConfigurationProvider
                }
            ]
        };
    }
}
