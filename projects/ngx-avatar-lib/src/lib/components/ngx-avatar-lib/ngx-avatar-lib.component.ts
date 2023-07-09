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

    @ViewChild('avatarImage', { static: true }) avatarImageElement: ElementRef | undefined;

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

    public addImage(event: any): void {
        let imageFile: File = event.target.files[0];

        this.fileReader.readAsDataURL(imageFile);

        this.imageSource = imageFile.toString();
        this.imageSourceUpdated.emit(imageFile);
    }

    public openFileInput(fileInput: any): void{
        fileInput.click()
        this.showAddImageOverlay = false
    }

    public removeImage(fileInput: any): void {
        fileInput.value = null;

        if (this.avatarImageElement) {
            this.avatarImageElement.nativeElement.src = this.defaultAvatarImageFullPath;
        }

        this.imageSource = this.defaultAvatarImageFullPath;
        this.imageSourceUpdated.emit(undefined);
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
}
