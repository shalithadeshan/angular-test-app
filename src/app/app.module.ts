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
import { CompletedComponent } from './private/home/my-profile/completed/completed.component';
import { IncompletedComponent } from './private/home/my-profile/incompleted/incompleted.component';


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
    IncompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
