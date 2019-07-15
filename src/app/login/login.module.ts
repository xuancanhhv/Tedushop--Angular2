import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';



export const router: Routes=[
 {path: '', component: LoginComponent}
]


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class LoginModule { }
