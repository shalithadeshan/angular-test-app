import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Users} from '../../classes/users';

@Injectable({
  providedIn: 'root'
})
export class UserProfileSubjectService {

  private userData = {} as Users;
  private subject = new BehaviorSubject<Users>(this.userData);

  constructor() {
  }

  public sendUserProfileData(userProfile: Users): void {
    this.userData = userProfile;
    if (this.userData != null) {
    return this.subject.next(this.userData);
    }
  }

  public getUserProfileData(): Observable<Users> {
      return this.subject.asObservable();
  }
}
