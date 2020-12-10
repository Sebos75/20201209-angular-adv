import {Observable, EMPTY, of, throwError, Subject} from 'rxjs';
import { catchError } from 'rxjs/operators';

const errored$ = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.error(new Error('Cannot connect'))
    subscriber.next(3);
});


errored$.pipe(
    catchError((err) => {
      console.log(err);
      return new Subject();
    })
  ).subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('I am complete')
  },
})
