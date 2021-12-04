import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Posts} from '../../../../classes/posts';
import {Comments} from '../../../../classes/comments';
import {AuthService} from '../../../../+auth/services/auth.service';
import {Paths} from '../../../../enum/paths.enum';

@Component({
  selector: 'app-post-dialog-box',
  templateUrl: './post-dialog-box.component.html',
  styleUrls: ['./post-dialog-box.component.scss']
})
export class PostDialogBoxComponent implements OnInit {
  panelOpenState = false;
  post: Posts;
  comments = [] as Comments[];

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              public dialogRef: MatDialogRef<PostDialogBoxComponent>,
              private apiBaseService: AuthService) {
    this.post = data.posts;
  }

  ngOnInit(): void {
    this.apiBaseService.getComments<Comments[]>([Paths.Posts, this.post.id.toString(), Paths.Comments])
      .subscribe(res => {
        this.comments = res;
        console.log(this.comments);
      });
  }

}
