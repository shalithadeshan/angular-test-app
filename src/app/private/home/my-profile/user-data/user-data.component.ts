import {Component, OnDestroy, OnInit} from '@angular/core';
import {Users} from '../../../../classes/users';
import {Subscription} from 'rxjs';
import {UserProfileSubjectService} from '../../../../shared/services/user-profile-subject.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, OnDestroy {
  userProfileSubscription: Subscription;
  user = {} as Users;

  constructor(private userProfileSubjectService: UserProfileSubjectService) {
    this.userProfileSubscription = this.userProfileSubjectService.getUserProfileData()
      .subscribe(res => {
        if (res != null) {
          this.user = res;
        }
        const jsonData = localStorage.getItem('userData');
        if (jsonData != null) {
          this.user = JSON.parse(jsonData);
        }
      });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }


}
