import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Users } from '../../../classes/users';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  email: any;

  constructor(private authService: AuthService) {
  }

  user: Users[];

  ngOnInit(): void {
  }

  onLoginToApp(): void {
    this.authService.getAllUsers().subscribe(res => {
      this.user = res;
    });
  }
}
