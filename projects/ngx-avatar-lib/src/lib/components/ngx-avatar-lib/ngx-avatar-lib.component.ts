import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxAvatarLibService } from "../../services/ngx-avatar-lib.service";

export type FileReaderResultType = string | ArrayBuffer | null;

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

    @Input() imageSource: FileReaderResultType = null;
    @Output() imageSourceUpdated: EventEmitter<File | null> = new EventEmitter<File | null>();

    constructor(private readonly ngxAvatarLibService: NgxAvatarLibService) {
        this.defaultAvatarImageFullPath =  ngxAvatarLibService.DefaultAvatarImageFullPath;
        this.fileReader = new FileReader();

        this.fileReader.onload = (): void => {
            if (this.avatarImageElement) {
                const fileReaderResult: FileReaderResultType = this.fileReader.result;

                this.avatarImageElement.nativeElement.src = fileReaderResult;
                this.imageSource = fileReaderResult;
            }
        };
    }

    ngOnInit(): void {
    }

    public setImage(imageSource: FileReaderResultType): void {
        if (!imageSource) {
            imageSource = this.defaultAvatarImageFullPath;
        }

        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = imageSource;
        }

        this.imageSource = imageSource;
    }

    protected get ImageSource(): FileReaderResultType {
        return this.imageSource;
    }

    protected set ImageSource(imageSource: FileReaderResultType) {
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
        this.imageSourceUpdated.emit(imageFile);
    }

    protected removeImage(fileInput: any): void {
        fileInput.value = null;

        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = this.defaultAvatarImageFullPath;
        }

        this.imageSource = this.defaultAvatarImageFullPath;
        this.imageSourceUpdated.emit(null);
    }
}
