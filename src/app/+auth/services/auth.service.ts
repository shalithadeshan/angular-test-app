import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();
  constructor(@Inject('BASE_URL') private baseUrl: string,
              private http: HttpClient) {
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users');
  }
  public getAllPosts(): Observable<any> {
    return this.http.get(this.baseUrl + 'posts');
  }

}
