import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LibConfigurationProvider } from "../ngx-avatar-lib.configuration";

@Injectable({
  providedIn: 'root'
})
export class NgxAvatarLibService {
    private readonly apiUrl: string;
    constructor(public configurationProvider: LibConfigurationProvider, private httpClient: HttpClient) {
        this.apiUrl = configurationProvider.config.apiUrl;
    }

    public uploadAvatarImage(userId: number, file: File): Observable<Object> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        const httpParams = new HttpParams({
            fromObject: {
                userId: userId
            }
        });

        return this.httpClient.post(this.apiUrl, formData, {
            params: httpParams,
            reportProgress: true,
            observe: 'body',
            withCredentials: true
        });
    }
}
