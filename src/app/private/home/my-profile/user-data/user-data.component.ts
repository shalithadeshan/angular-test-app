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

  constructor(private  userProfileSubjectService: UserProfileSubjectService) {
    console.log('OK');
    // console.log(this.userProfileSubjectService.userData);
    // this.user = this.userProfileSubjectService.userData;
    this.userProfileSubscription = this.userProfileSubjectService.getUserProfileData()
      .subscribe(res => {
        console.log(res);
        this.user = res;
      });


  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }


}
