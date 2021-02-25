import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {StartPageComponent} from './start-page/start-page.component';
import {HelloComponent} from './hello/hello.component';
import {ShowUserComponent} from './show-user/show-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  {
    path: 'start-page',
    component: StartPageComponent,
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'show-user',
    component: ShowUserComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
