<p align="center">
  <img alt="ngx-libraries logo" height="256px" width="256px" style="text-align: center;" src="https://github.com/mindarchitect/ngx-libraries/blob/main/assets/logo/512x512.png">
</p>

# @mindarchitect-ngx-libraries/ngx-avatar-lib - Avatar library

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)

## Table of Contents

- [Components](#components)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Support](#support)
- [License](#license)


## Components

- `<ngx-avatar></ngx-avatar>` is designed and developed to select and display user avatar and bind avatar image change event handler.

- Avatar component
    <p>  
        <img alt="ngx-avatar-lib" height="266px" width="260px" style="text-align: center;" src="https://github.com/mindarchitect/ngx-libraries/blob/main/assets/ngx-avatar-lib/images/1.png">
    </p>

- Avatar update mode
    <p>  
        <img alt="ngx-avatar-lib" height="266px" width="260px" style="text-align: center;" src="https://github.com/mindarchitect/ngx-libraries/blob/main/assets/ngx-avatar-lib/images/2.png">
    </p>

- Avatar default image
    <p>  
        <img alt="ngx-avatar-lib" height="266px" width="260px" style="text-align: center;" src="https://github.com/mindarchitect/ngx-libraries/blob/main/assets/ngx-avatar-lib/images/3.png">
    </p>

---

## Dependencies
* [Angular](https://angular.io) developed and tested with `16.x`

---

## Installation

### Install via _npm_.

Now install `@mindarchitect-ngx-libraries/ngx-avatar-lib` via:

```shell
npm install --save @mindarchitect-ngx-libraries/ngx-avatar-lib
```

---

### Import the library

Once installed you need to import the main modules:

```js
import { NgxAvatarLibModule, NgxAvatarLibConfigurationProvider } from '@mindarchitect-ngx-libraries/ngx-avatar-lib';
```

Next, provide configuration implementation for the library:

```js
@NgModule({
    ...
    imports: [
        ...
        NgxAvatarLibModule.forRoot({
            provider: {
                provide: NgxAvatarLibConfigurationProvider,
                useClass: ExampleNgxAvatarLibConfigurationProvider
            }
        })
    ]
    ...
})
export class AppModule {
}
```
Example of the configuration:
```js
import {Injectable} from "@angular/core";
import {
    NgxAvatarLibConfiguration,
    NgxAvatarLibConfigurationProvider
} from "@mindarchitect-ngx-libraries/ngx-avatar-lib";

@Injectable({ providedIn: 'root' })
export class ExampleNgxAvatarLibConfigurationProvider implements NgxAvatarLibConfigurationProvider {
    get Configuration(): NgxAvatarLibConfiguration {
        return {
            defaultAvatarImagePath: '/assets/',
            defaultAvatarImageFileName: 'avatar.jpg'
        };
    }
}
```

---

## API

Types:

|          Type           |                                 Description                                  |
|:-----------------------:|:----------------------------------------------------------------------------:|
| FileReaderResultType    | File reader result helper intersection type (string or ArrayBuffer or null)  |

<br/>
<br/>

Properties and events:

|      Property      |    Bind    |          Type          |          Default           | Description                        |
|:------------------:|:----------:|:----------------------:|:--------------------------:|:-----------------------------------|
|    imageSource     | `Input()`  | `FileReaderResultType` |            null            | Image source                       |
| imageSourceUpdated | `Output()` |      File or null      | EventEmitter<File or null> | Emits image source changing event  |


<br/>
<br/>
Methods:

| Method                                       | Description                                                                  |
|:---------------------------------------------|:-----------------------------------------------------------------------------|
| setImage(imageSource: FileReaderResultType)  | Sets avatar image source. If image source is null or empty, default is used  |

---

## Usage

Add the `@mindarchitect-ngx-libraries/ngx-avatar-lib` element to your template:

```html
<ngx-avatar #avatar imageSource="{{ImageSource}}" (imageSourceUpdated)="imageSourceUpdated($event)"></ngx-avatar>
```

This will display avatar image using image source property binding and defining image source update event handler.

You can use @ViewChild annotation to access component directly from consumer code:

```js
@ViewChild('avatar') ngxAvatarLibComponent!: NgxAvatarLibComponent;
```

---

## Support

---

## License

Copyright (c) 2022-2023 [Andrey Lavrusha](https://github.com/mindarchitect). Licensed under the MIT License (MIT)