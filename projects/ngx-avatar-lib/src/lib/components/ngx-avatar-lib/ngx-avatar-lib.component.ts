import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxAvatarLibService } from "../../services/ngx-avatar-lib.service";

@Component({
    selector: 'ngx-avatar',
    templateUrl: './ngx-avatar-lib.component.html',
    styleUrls: ['./ngx-avatar-lib.component.sass']
})
export class NgxAvatarLibComponent implements OnInit {
    private readonly defaultAvatarImageFullPath: string;

    @ViewChild('avatarImage', { static: true }) avatarImageElement: ElementRef | undefined;

    @Input() imageSource: string | undefined;
    @Output() imageSourceUpdated: EventEmitter<File> = new EventEmitter<File>();

    private showAddImageOverlay: boolean = false;

    constructor(private readonly ngxAvatarLibService: NgxAvatarLibService) {
        this.defaultAvatarImageFullPath =  ngxAvatarLibService.DefaultAvatarImageFullPath;
    }

    get ImageSource() {
        return this.imageSource;
    }

    set ImageSource(imageSource: string | undefined) {
        this.imageSource = imageSource;
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

        let imageFile: File = event.target.files[0];

        fileReader.readAsDataURL(imageFile);

        this.imageSource = imageFile.toString();
        this.imageSourceUpdated.emit(imageFile);
    }

    openFileInput(fileInput: any){
        fileInput.click()
        this.showAddImageOverlay = false
    }

    removeImage() {
        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = this.defaultAvatarImageFullPath;
        }

        this.imageSource = this.defaultAvatarImageFullPath;
        this.imageSourceUpdated.emit(undefined);
    }
}
