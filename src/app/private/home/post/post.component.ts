import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // tslint:disable-next-line:typedef
  openDialog() {
    this.dialog.open(PostDialog);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}

@Component({
  selector: 'app-post-dialog',
  templateUrl: 'post-dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class PostDialog {}

