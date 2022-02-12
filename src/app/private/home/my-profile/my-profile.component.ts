import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  display1 = false;
  display2 = false;
  constructor() { }

  ngOnInit(): void {
  }

  onPressComplete(): void {
    this.display1 = !this.display1;
  }

  onPressIncomplete(): void{
    this.display2 = !this.display2;
  }

}
