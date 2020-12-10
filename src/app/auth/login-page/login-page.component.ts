import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
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
export class LoginPageComponent implements OnInit {

  credentialForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  errorMessage = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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
    this.userService.logIn({email, password}).subscribe((user: User) => {
      console.log(user);
    });
  }

}
