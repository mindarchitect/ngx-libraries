<p align="center">
  <img alt="ngx-libraries logo" height="256px" width="256px" style="text-align: center;" src="../../assets/logo/512x512.png">
</p>

# @mindarchitect-ngx-libraries/ngx-avatar-lib - Avatar library

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)

## Table of Contents

- [Components](#components)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Development](#development)
- [Support](#support)
- [License](#license)

## Components

- `<ngx-avatar></ngx-avatar>` is designed and developed to select and display user avatar and bind avatar image change event handler.
 
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

| option                      |    bind    |  type  | default | description                         |
|:----------------------------| :--------: |:------:| :-----: |:------------------------------------|
| imageSource                 | `Input() ` | string |    -    | Image source (string or byte array) |
| imageSourceUpdated          |  Output()  |  File  |    -    | Emits image source changing event   |

---

## Usage

add the `@angular-material-extensions/password-strength` element to your template:

```html
<ngx-avatar imageSource="{{ImageSource}}" (imageSourceUpdated)="imageSourceUpdated($event)"></ngx-avatar>
```

This will display avatar image using image source property binding and defining image source update event handler.

---

## Support

---

## License

Copyright (c) 2022-2023 [Andrey Lavrusha](https://github.com/mindarchitect). Licensed under the MIT License (MIT)