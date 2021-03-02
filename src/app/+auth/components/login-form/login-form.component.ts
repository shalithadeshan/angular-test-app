import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLoginToApp(): void {
    this.authService.getAllUsers().subscribe(res => {
      console.log(res);
    });
  }
}
