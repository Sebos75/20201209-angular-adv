import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'ap-user-page',
  template: `
    <section>
      <div class="my-3">
        <h2>Panel użytkownika</h2>
      </div>
      <hr>
      <div class="jumbotron bg-secondary text-light">
        <h6>Szczegółowe dane:</h6>
        <ul class="list-group">
          <li class="list-group-item bg-dark border-light">{{ user.name }}</li>
          <li class="list-group-item bg-dark border-light">{{ user.lastName }}</li>
        </ul>
      </div>
      <div class="text-right">
        <button class="btn btn-danger" (click)="handleUserLogOut()"> Wyloguj </button>
      </div>
    </section>
  `
})
export class UserPageComponent implements OnInit, OnDestroy {

  user = {name: 'Example', lastName: 'Placeholder'};
  private unsubSubject = new Subject<void>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnDestroy(): void {
    // HACK jak mamy dużo subskrypcji i każdą z nich chcemy natychmiast unsubować !
    // w połączeniu z takeUntil(this.unsubSubject) niżej
    this.unsubSubject.next();
    this.unsubSubject.complete();
  }

  ngOnInit(): void {
    this.userService.getUser$().pipe(takeUntil(this.unsubSubject)).subscribe((user: User) => {
        // console.log(user);
        this.user = user;
    });
    this.userService.fetchUserDetails().pipe(takeUntil(this.unsubSubject)).subscribe((user: User) => {
      console.log(user);
    });
  }

  handleUserLogOut(): void {
    this.userService.logOut();
    this.router.navigate(['login']);
  }
}
