import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from '../../../../../classes/to-do';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {
  @Input() todo = {} as ToDo;
  constructor() { }

  ngOnInit(): void {
  }

}
