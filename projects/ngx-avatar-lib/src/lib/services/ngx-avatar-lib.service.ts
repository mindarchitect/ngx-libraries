import { Injectable } from '@angular/core';

import {NgxAvatarLibConfigurationProvider} from "../configuration/ngx-avatar-lib-configuration.provider";

@Injectable({
  providedIn: 'root'
})
export class NgxAvatarLibService {

    private property: string = '';
    constructor(public configurationProvider: NgxAvatarLibConfigurationProvider) {
        this.property = configurationProvider.Configuration.property;
    }
}
