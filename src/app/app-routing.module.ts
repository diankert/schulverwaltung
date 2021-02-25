import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {StartPageComponent} from './start-page/start-page.component';
import {HelloComponent} from './hello/hello.component';
import {ShowUserComponent} from './show-user/show-user.component';
import {MainComponent} from './main/main.component';

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
    path: 'hello/:id',
    component: HelloComponent,
  },
  {
    path: 'show-user',
    component: ShowUserComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
