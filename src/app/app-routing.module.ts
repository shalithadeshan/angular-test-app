import { MyProfileComponent } from './private/home/my-profile/my-profile.component';
import { AlbumComponent } from './private/home/album/album.component';
import { PostComponent } from './private/home/post/post.component';
import { HomeComponent } from './private/home/home.component';
import { AuthComponent } from './+auth/pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompletedComponent} from './private/home/my-profile/completed/completed.component';
import {IncompletedComponent} from './private/home/my-profile/incompleted/incompleted.component';

const routes: Routes = [
  { path: '', component:  AuthComponent},
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'incompleted', component: IncompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
