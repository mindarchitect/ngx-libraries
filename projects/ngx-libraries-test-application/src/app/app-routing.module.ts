import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxAvatarLibTestComponent } from "./ngx-avatar-lib-test/ngx-avatar-lib-test.component";

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'ngx-avatar-lib-test', component: NgxAvatarLibTestComponent},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
