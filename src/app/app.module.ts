import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './lib/material/material.module';
import { AuthComponent } from './+auth/pages/auth/auth.component';
import { LoginFormComponent } from './+auth/components/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './private/home/home.component';
import {HeaderComponent} from './shared/header/header.component';
import { PostComponent } from './private/home/post/post.component';
import { AlbumComponent } from './private/home/album/album.component';
import { MyProfileComponent } from './private/home/my-profile/my-profile.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './private/home/my-profile/to-do-list/to-do-list.component';
import { UserDataComponent } from './private/home/my-profile/user-data/user-data.component';
import { PostDialogBoxComponent } from './private/home/post/post-dialog-box/post-dialog-box.component';
import { AlbumDialogBoxComponent } from './private/home/album/album-dialog-box/album-dialog-box.component';
import {AuthService} from './+auth/services/auth.service';
import { ToDosComponent } from './private/home/my-profile/to-do-list/to-dos/to-dos.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginFormComponent,
    HomeComponent,
    HeaderComponent,
    PostComponent,
    AlbumComponent,
    MyProfileComponent,
    ToDoListComponent,
    UserDataComponent,
    PostDialogBoxComponent,
    AlbumDialogBoxComponent,
    ToDosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
