import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthInterceptor } from './auth.interceptor';
import { UserService } from './user.service';

describe('AuthInterceptor', () => {

  let userService: UserService;
  let httpMock: HttpTestingController;
  let valueServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    valueServiceSpy = jasmine.createSpyObj('UserService', ['getToken$']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
          AuthInterceptor,
          {provide: UserService, useValue: valueServiceSpy}
      ]
    });


    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    valueServiceSpy.getToken$.and.returnValue(of(''));
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);


    expect(interceptor).toBeTruthy();
  });

  it('should add auth token to request', () => {
    userService = TestBed.inject(UserService);
    valueServiceSpy.getToken$.and.returnValue(of('tok3n'));

    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);


    expect(interceptor).toBeTruthy();
  });
});
