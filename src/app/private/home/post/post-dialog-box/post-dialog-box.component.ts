import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-post-dialog-box',
  templateUrl: './post-dialog-box.component.html',
  styleUrls: ['./post-dialog-box.component.scss']
})
export class PostDialogBoxComponent implements OnInit {
  panelOpenState = false;
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
