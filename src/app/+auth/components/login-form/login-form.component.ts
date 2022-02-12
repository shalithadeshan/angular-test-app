import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserProfileSubjectService} from '../../../shared/services/user-profile-subject.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  email = '';


  constructor(
    private  userProfileSubjectService: UserProfileSubjectService,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLoginToApp(): void {
    // 1. get user input to BL
    // i. -> Form , -> two way binding ,-> ....
    // -> two way binding - DONE.
    // 2. pass that id to service method
    // i. create service method
    // ii .subscribe to that method

    // 4. show that in the console
    this.authService.getUserById(this.email)
      .subscribe(res => {
        // Log In
        if (res != null) {
          const jsonData = JSON.stringify(res);
          localStorage.setItem('userData', jsonData);
          // Show that in the profile
          this.userProfileSubjectService
            .sendUserProfileData(res);

          this.router.navigate(['/post']);
        }

      });


    // this.authService.sendClickEvent();
  }
}
