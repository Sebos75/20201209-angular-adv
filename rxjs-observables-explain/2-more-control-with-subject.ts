import {Subject, BehaviorSubject} from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

const numberSubject = new BehaviorSubject<number>(33);

function multiBy20(n: number) {
  return n * 20
}

[1, 2, 3, 4].map((n) => n * 20); //?
[1, 2, 3, 4].map(multiBy20); //?
[1, 2, 3, 4].map(multiBy20); //?
[1, 2, 3, 4].map(multiBy20); //?
[1, 2, 3, 4].map((n) => 1); //?
[1, 2, 3, 4].map((n) => n * 20); //?

numberSubject.next(1);
numberSubject.next(3);
numberSubject.next(1);
numberSubject.next(5);
numberSubject.next(1);
numberSubject.next(1200);

// Subscriber
numberSubject.pipe(
  tap((v) => {
    console.log(v);
  }),
  filter(n => n > 1000),
  tap((v) => {
    console.log(v);
  }),
  map(multiBy20),
  tap((v) => {
    console.log(v);
  }),

  ).subscribe(
    (num: number) => {
      console.log(num);
    }
);

numberSubject.next(2);
numberSubject.next(20);
