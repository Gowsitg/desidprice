import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user/user';
import { environment } from 'src/environments/environment.ts';


@Injectable({ providedIn: 'root' })
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
      return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('access_token', user.token);
                return user;
            }));
    }

    getToken() {
      return localStorage.getItem('access_token');
    }

    get isLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return authToken !== null ? true : false;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}