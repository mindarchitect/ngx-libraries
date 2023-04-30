import {Component, OnInit} from '@angular/core';
import {NgxAvatarLibService} from "../../services/ngx-avatar-lib.service";

@Component({
    selector: 'ngx-avatar',
    templateUrl: './ngx-avatar-lib.component.html',
    styleUrls: ['./ngx-avatar-lib.component.sass']
})
export class NgxAvatarLibComponent implements OnInit {
    private avatarImageSource: string = 'https://mdbcdn.b-cdn.net/img/new/avatars/9.webp';
    constructor(private readonly ngxAvatarLibService: NgxAvatarLibService) {
    }

    get AvatarImageSource() { return this.avatarImageSource; }

    ngOnInit(): void {
        this.ngxAvatarLibService.downloadAvatarImage(1)
        .subscribe({
            next: (httpResponse: any) => {
            },
            error: (httpErrorResponse: any) => {
            }}
        );
    }
}
