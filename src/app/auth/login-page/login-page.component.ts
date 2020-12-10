import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  templateUrl: './login-page.component.html',
  styles: [
    `
        .ng-touched.ng-invalid {
          border-color: darkred;
        }
    `
  ]
})
export class LoginPageComponent implements OnInit, OnDestroy {

  credentialForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  errorMessage = '';
  private loginSub!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribeLogInStream();
  }

  unsubscribeLogInStream(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

  handleCleanError(): void {
    this.errorMessage = '';
  }

  handleLogIn(): void {
    if (this.credentialForm.invalid) {
      this.errorMessage = 'Uzupełnij wszystkie pola';
      this.credentialForm.markAllAsTouched();
      return;
    }
    const {email, password} = this.credentialForm.value;
    // Odsubskrybuj jeśli Nx kliknięto login.
    this.unsubscribeLogInStream();
    this.loginSub = this.userService.logIn({email, password}).subscribe(
      (user: User) => {
        console.log(user);
        // Route to other page...
      },
      (err: HttpErrorResponse) => {
        this.errorMessage = 'Nie udało się zalogować ' + String(err.status);
      }
    );
  }

}
