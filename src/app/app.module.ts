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
import { CompletedComponent } from './private/home/my-profile/to-do-list/completed/completed.component';
import { IncompletedComponent } from './private/home/my-profile/to-do-list/incompleted/incompleted.component';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './private/home/my-profile/to-do-list/to-do-list.component';
import { UserDataComponent } from './private/home/my-profile/user-data/user-data.component';
import { PostDialogBoxComponent } from './private/home/post/post-dialog-box/post-dialog-box.component';
import { AlbumDialogBoxComponent } from './private/home/album/album-dialog-box/album-dialog-box.component';
import {AuthService} from './+auth/services/auth.service';



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
    CompletedComponent,
    IncompletedComponent,
    ToDoListComponent,
    UserDataComponent,
    PostDialogBoxComponent,
    AlbumDialogBoxComponent,

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
