import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxAvatarLibService } from "../../services/ngx-avatar-lib.service";

@Component({
    selector: 'ngx-avatar',
    templateUrl: './ngx-avatar-lib.component.html',
    styleUrls: ['./ngx-avatar-lib.component.sass']
})
export class NgxAvatarLibComponent implements OnInit {
    private readonly defaultAvatarImageFullPath: string;
    private showAddImageOverlay: boolean = false;

    private readonly fileReader: FileReader;

    @ViewChild('avatarImage', { static: true }) private avatarImageElement: ElementRef | undefined;

    @Input() imageSource: string | undefined;
    @Output() imageSourceUpdated: EventEmitter<File> = new EventEmitter<File>();

    constructor(private readonly ngxAvatarLibService: NgxAvatarLibService) {
        this.defaultAvatarImageFullPath =  ngxAvatarLibService.DefaultAvatarImageFullPath;
        this.fileReader = new FileReader();

        this.fileReader.onload = (): void => {
            if (this.avatarImageElement) {
                this.avatarImageElement.nativeElement.src = this.fileReader.result;
            }
        };
    }

    ngOnInit(): void {
    }

    public resetImage(): void {
        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = this.defaultAvatarImageFullPath;
        }

        this.imageSource = this.defaultAvatarImageFullPath;
    }

    protected get ImageSource() {
        return this.imageSource;
    }

    protected set ImageSource(imageSource: string | undefined) {
        this.imageSource = imageSource;
    }

    protected get ShowAddImageOverlay(): boolean {
        return this.showAddImageOverlay;
    }

    protected set ShowAddImageOverlay(value: boolean) {
        this.showAddImageOverlay = value;
    }

    protected openFileInput(fileInput: any): void{
        fileInput.click()
        this.showAddImageOverlay = false
    }

    protected addImage(event: any): void {
        let imageFile: File = event.target.files[0];

        this.fileReader.readAsDataURL(imageFile);

        this.imageSource = imageFile.toString();
        this.imageSourceUpdated.emit(imageFile);
    }

    protected removeImage(fileInput: any): void {
        fileInput.value = null;

        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = this.defaultAvatarImageFullPath;
        }

        this.imageSource = this.defaultAvatarImageFullPath;
        this.imageSourceUpdated.emit(undefined);
    }
}
