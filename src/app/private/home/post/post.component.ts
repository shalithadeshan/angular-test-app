import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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
  posts: Posts[];

  // tslint:disable-next-line:typedef
  openDialog(post: Posts) {
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.width = '755%';
    dialogConfig.height = '75%';
    dialogConfig.data = {posts: post};
    this.dialog.open(PostDialogBoxComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.authService.getAllPosts().subscribe(res => {
      this.posts = res;
    });
  }

}



