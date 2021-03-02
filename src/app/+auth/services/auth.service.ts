import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject('BASE_URL') private baseUrl: string,
              private http: HttpClient) {
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users');
  }

}
