import { TestBed } from '@angular/core/testing';

import { NgxAvatarLibService } from './ngx-avatar-lib.service';

describe('NgxAvatarLibService', () => {
    let service: NgxAvatarLibService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxAvatarLibService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
