import { Injectable, Provider } from '@angular/core';

export class LibToConfigureConfiguration {
    apiUrl: string = '';
}

export class LibConfiguration {
    config?: Provider;
}

@Injectable({ providedIn: 'root' })
export abstract class LibConfigurationProvider {
    abstract get config(): LibToConfigureConfiguration;
}

@Injectable({ providedIn: 'root' })
export class DefaultLibConfiguration implements LibConfigurationProvider {
    get config(): LibToConfigureConfiguration {
        return { apiUrl: '' };
    }
}