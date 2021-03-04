import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../../+auth/services/auth.service';
import { Albums } from '../../../classes/albums';
import {AlbumDialogBoxComponent} from './album-dialog-box/album-dialog-box.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) { }
  album: Albums[];

  // tslint:disable-next-line:typedef
  openDialog() {
    this.dialog.open(AlbumDialogBoxComponent);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  onAlbumCard(): void {
    this.authService.getAllAlbums().subscribe(rest =>{
      this.album = rest;
    });
  }
}




