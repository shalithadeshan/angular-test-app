import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Users} from '../../classes/users';
import {map} from 'rxjs/operators';
import {ToDo} from '../../classes/to-do';


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

  sendClickEvent(): void {
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
  getComments<T>(path: string[], isLoaderOn = false): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    console.log(apiPath);
    return this.http.get<T>(apiPath).pipe(
      map(data => data));
  }

  public getTodosById(userId): Observable<ToDo[]> {
    // 3. GET relevant data to user (get user profile data)
    return this.http.get<ToDo[]>(this.baseUrl + `todos/?userId=${userId}`);
  }

}
