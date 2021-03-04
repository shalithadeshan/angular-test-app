import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../../+auth/services/auth.service';
import { Posts } from '../../../classes/posts';

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
    this.dialog.open(PostDialog);
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

@Component({
  selector: 'app-post-dialog',
  templateUrl: 'post-dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class PostDialog {}

