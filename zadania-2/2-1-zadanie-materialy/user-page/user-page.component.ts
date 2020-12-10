import { Component, OnInit } from '@angular/core';

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
export class UserPageComponent implements OnInit {

  user = {name: 'Example', lastName: 'Placeholder'};

  constructor() { }

  ngOnInit(): void {
  }

  handleUserLogOut(): void {
  }
}
