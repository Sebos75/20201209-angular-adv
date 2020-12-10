import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user';

// type Credentials = {email: string, password: string};

const DEFAULT_USER: User = {
  name: '',
  lastName: '',
  token: ''
};

// FAKE showcase:
// const myService = new UserService(null);

// myService.getUser().next({
//   name: 'TROLL',
//   lastName: '',
//   token: ''
// });

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Statefull

  private userSubject = new BehaviorSubject<User>(DEFAULT_USER);
  private user$ = this.userSubject.asObservable();
  private loggedIn$: Observable<boolean> = this.user$.pipe(
    map((user: User) => Boolean(user.token))
  );
  // private isLoggedIn = false;
  private baseURL = environment.authServerBaseURL;

  constructor(private httpClient: HttpClient) {}

  logIn(credentials: {email: string, password: string}): Observable<User> {
    // logIn(credentials: any): Observable<User> {
    return this.httpClient.post<User>(this.baseURL + 'login', credentials)
               .pipe(
                 tap((user: User) => {
                    // USER zalogowany!
                    this.userSubject.next(user);
                 }),
                 catchError((err: HttpErrorResponse) => {
                    // USER Wylogowany !
                    this.userSubject.next(DEFAULT_USER);
                    return throwError(err);
                 })
               );
  }

  fetchUserDetails(): Observable<User> {

    // Naiwne podejście:
    // let token = '';
    // this.userSubject.subscribe((user) => {
    //   console.log('ODEBRALEM', user);
    //   token = user.token;
    // });

    // const user = this.userSubject.getValue();
    // user.token

    const {token = ''} = this.userSubject.getValue();
    return this.httpClient.get<User>(this.baseURL + 'user', {
      headers: {
        authorization: token
      }
    });
  }

  setInitialUser(): void {
    this.userSubject.next({name: 'Jan', lastName: 'Nowak', token: '12'});
  } // TO JEST OK.

  // To jest złamanie zasady Single Source of Truth  !!! (każdy może zrobić .next() !!!!)
  // getUser(): BehaviorSubject<User> {
  getUser$(): Observable<User> {
    return this.user$;
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loggedIn$;
  }

  // ZAIMPLEMENTUJ !
  logOut(): void {
    this.userSubject.next(DEFAULT_USER);
  }
 }
