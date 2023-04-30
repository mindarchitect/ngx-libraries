import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs';

import { LibConfigurationProvider } from "../ngx-avatar-lib.configuration";

@Injectable({
  providedIn: 'root'
})
export class NgxAvatarLibService {

    private property: string = '';
    constructor(public configurationProvider: LibConfigurationProvider, private httpClient: HttpClient) {
        this.property = configurationProvider.Configuration.property;
    }

    public uploadAvatarImage(userId: number, file: File): Observable<Object> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        const httpParams = new HttpParams({
            fromObject: {
                userId: userId
            }
        });

        return this.httpClient.post(this.property, formData, {
            params: httpParams,
            reportProgress: true,
            observe: 'body',
            withCredentials: true
        });
    }

    public downloadAvatarImage(userId: number): Observable<HttpEvent<Blob>> {
        const httpParams = new HttpParams()
            .append('userId', userId);

        return this.httpClient.get(this.property, {
            params: httpParams,
            reportProgress: true,
            observe: 'events',
            responseType: 'blob'
        })
    }
}
