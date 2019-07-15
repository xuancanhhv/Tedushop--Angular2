import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule} from '@angular/router';
//localhost:4200/main
const userRoutes : Routes = [
  //localhost:4200/main/user
  {path:'',redirectTo: 'index', pathMatch:'full'},
  //localhost:4200/user/index
  {path: 'index', component: UserComponent}
]


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
