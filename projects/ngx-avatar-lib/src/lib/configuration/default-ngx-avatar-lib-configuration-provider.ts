import { Injectable } from '@angular/core';
import { NgxAvatarLibConfiguration } from "./ngx-avatar-lib.configuration";
import { NgxAvatarLibConfigurationProvider } from "./ngx-avatar-lib-configuration.provider";

@Injectable({ providedIn: 'root' })
export class DefaultNgxAvatarLibConfigurationProvider implements NgxAvatarLibConfigurationProvider {
    get Configuration(): NgxAvatarLibConfiguration {
        return { property: '' };
    }
}