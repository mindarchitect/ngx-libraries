import { Component } from '@angular/core';

@Component({
  selector: 'app-ngx-avatar-lib-test',
  templateUrl: './ngx-avatar-lib-test.component.html',
  styleUrls: ['./ngx-avatar-lib-test.component.sass']
})
export class NgxAvatarLibTestComponent {
    private imageSource: string = '/assets/libraries/ngx-avatar-lib/ilona.jpg';
    get ImageSource(): string {
        return this.imageSource;
    }

    set ImageSource(value: string) {
        this.imageSource = value;
    }

    imageSourceUpdated(event: any) {
    }
}
