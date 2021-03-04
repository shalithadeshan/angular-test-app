import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../+auth/services/auth.service';
import {Users} from '../../../../classes/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  clickEventSubscription: Subscription;
  user: Users[];
  constructor(private authService: AuthService) {
    this.clickEventSubscription = this.authService.getAllUsers().subscribe( rest =>
    this.user = rest);
  }

  ngOnInit(): void {

  }



}
