import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-album-dialog-box',
  templateUrl: './album-dialog-box.component.html',
  styleUrls: ['./album-dialog-box.component.scss']
})
export class AlbumDialogBoxComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
