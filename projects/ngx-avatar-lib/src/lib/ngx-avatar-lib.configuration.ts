import { Injectable, Provider } from '@angular/core';

export class NgxAvatarLibConfiguration {
    property: string = '';
}

export class LibConfiguration {
    configuration?: Provider;
}

@Injectable({ providedIn: 'root' })
export abstract class LibConfigurationProvider {
    abstract get Configuration(): NgxAvatarLibConfiguration;
}

@Injectable({ providedIn: 'root' })
export class DefaultLibConfiguration implements LibConfigurationProvider {
    get Configuration(): NgxAvatarLibConfiguration {
        return { property: '' };
    }
}