import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PostDialog} from '../post/post.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // tslint:disable-next-line:typedef
  openDialog() {
    this.dialog.open(AlbumDialog);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}

@Component({
  selector: 'app-album-dialog',
  templateUrl: 'album-dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class AlbumDialog {}
