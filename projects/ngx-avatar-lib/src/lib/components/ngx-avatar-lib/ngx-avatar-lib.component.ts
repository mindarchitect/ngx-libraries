import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgxAvatarLibService} from "../../services/ngx-avatar-lib.service";

@Component({
    selector: 'ngx-avatar',
    templateUrl: './ngx-avatar-lib.component.html',
    styleUrls: ['./ngx-avatar-lib.component.sass']
})
export class NgxAvatarLibComponent implements OnInit {
    @ViewChild('avatarImage', { static: true }) avatarImageElement: ElementRef | undefined;

    @Input() imageSource: string | undefined;
    @Output() imageSourceUpdated: EventEmitter<string> = new EventEmitter<string>();

    private showAddImageOverlay: boolean = false;

    constructor(private readonly ngxAvatarLibService: NgxAvatarLibService) {
    }

    get ImageSource() {
        return this.imageSource;
    }

    get ShowAddImageOverlay(): boolean {
        return this.showAddImageOverlay;
    }

    set ShowAddImageOverlay(value: boolean) {
        this.showAddImageOverlay = value;
    }

    ngOnInit(): void {
    }

    addImage(event: any) {
        const fileReader: FileReader = new FileReader();

        fileReader.onload = () => {
            if (this.avatarImageElement) {
                this.avatarImageElement.nativeElement.src = fileReader.result;
            }
        };

        fileReader.readAsDataURL(event.target.files[0]);

        // save the image in the back end database
        // and get the photo url
        this.imageSource = event.target.files[0];
        this.imageSourceUpdated.emit(this.imageSource);
    }

    openFileInput(fileInput: any){
        fileInput.click()
        this.showAddImageOverlay = false
    }

    removeImage() {
        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = '';
        }

        this.imageSource = '';
        this.imageSourceUpdated.emit(this.imageSource);
    }
}
