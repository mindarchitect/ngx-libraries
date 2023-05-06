import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxAvatarLibComponent } from './components/ngx-avatar-lib/ngx-avatar-lib.component';
import { HttpClientModule } from "@angular/common/http";

import { DefaultLibConfiguration, LibConfiguration, LibConfigurationProvider } from "./ngx-avatar-lib.configuration";

@NgModule({
    declarations: [
        NgxAvatarLibComponent
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        NgxAvatarLibComponent
    ]
})
export class NgxAvatarLibModule {
    static forRoot(libConfiguration: LibConfiguration = {}): ModuleWithProviders<NgxAvatarLibModule> {
        return {
            ngModule: NgxAvatarLibModule,
            providers: [
                libConfiguration.configuration || {
                    provide: LibConfigurationProvider,
                    useClass: DefaultLibConfiguration
                }
            ]
        };
    }
}
