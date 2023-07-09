import { Injectable } from '@angular/core';

import {NgxAvatarLibConfigurationProvider} from "../configuration/ngx-avatar-lib-configuration.provider";

@Injectable({
    providedIn: 'root'
})
export class NgxAvatarLibService {
    private readonly defaultAvatarImageFullPath: string;

    constructor(public configurationProvider: NgxAvatarLibConfigurationProvider) {
        this.defaultAvatarImageFullPath = configurationProvider.Configuration.defaultAvatarImagePath + configurationProvider.Configuration.defaultAvatarImageFileName;
    }

    get DefaultAvatarImageFullPath(): string {
        return this.defaultAvatarImageFullPath;
    }
}
