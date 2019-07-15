import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {mainRoutes} from './main.routes';
import {RouterModule, Routes} from '@angular/router';
import { UserModule} from './user/user.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
