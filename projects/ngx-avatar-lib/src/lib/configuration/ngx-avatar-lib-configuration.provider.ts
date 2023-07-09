import { Injectable } from '@angular/core';
import { NgxAvatarLibConfiguration } from "./ngx-avatar-lib.configuration";

@Injectable({ providedIn: 'root' })
export abstract class NgxAvatarLibConfigurationProvider {
    abstract get Configuration(): NgxAvatarLibConfiguration;
}