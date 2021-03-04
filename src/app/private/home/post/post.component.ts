import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../../+auth/services/auth.service';
import { Posts } from '../../../classes/posts';
import { PostDialogBoxComponent } from './post-dialog-box/post-dialog-box.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) { }
  post: Posts[];

  // tslint:disable-next-line:typedef
  openDialog() {
    this.dialog.open(PostDialogBoxComponent);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onPostCard(): void {
    this.authService.getAllPosts().subscribe(rest => {
      this.post = rest;
    });
  }
}



