import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

// type Credentials = {email: string, password: string};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Statefull

  private user: User = {
    name: '',
    lastName: '',
    token: ''
  };
  private isLoggedIn = false;
  private baseURL = environment.authServerBaseURL;

  constructor(private httpClient: HttpClient) { }

  logIn(credentials: {email: string, password: string}): Observable<User> {
    // logIn(credentials: any): Observable<User> {
    return this.httpClient.post<User>(this.baseURL + 'login', credentials);
  }

  loggedIn(): boolean {
    return this.isLoggedIn;
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
 }
