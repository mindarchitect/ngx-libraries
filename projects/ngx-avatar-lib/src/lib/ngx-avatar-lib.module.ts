import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxAvatarLibComponent } from './components/ngx-avatar-lib/ngx-avatar-lib.component';
import { HttpClientModule } from "@angular/common/http";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { ConfigurationProvider } from "./configuration/configuration.provider";
import { NgxAvatarLibConfigurationProvider } from "./configuration/ngx-avatar-lib-configuration.provider";
import { DefaultNgxAvatarLibConfigurationProvider } from "./configuration/default-ngx-avatar-lib-configuration-provider";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        NgxAvatarLibComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
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
