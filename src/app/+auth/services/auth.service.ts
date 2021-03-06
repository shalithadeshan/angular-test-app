import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Users} from '../../classes/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new Subject<any>();

  constructor(@Inject('BASE_URL') private baseUrl: string,
              private http: HttpClient) {
  }


  public getUserById(userId): Observable<Users> {
    // 3. GET relevant data to user (get user profile data)
    return this.http.get<Users>(this.baseUrl + `users/${userId}`);
  }

  // tslint:disable-next-line:typedef
  sendClickEvent() {
    this.subject.next();
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users');
  }

  public getAllPosts(): Observable<any> {
    return this.http.get(this.baseUrl + 'posts');
  }

  public getAllAlbums(): Observable<any> {
    return this.http.get(this.baseUrl + 'albums');
  }

}
