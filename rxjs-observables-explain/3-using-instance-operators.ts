import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const numberSubject = new BehaviorSubject<number>(100);

const mappedNumber$ = numberSubject.pipe(map((num: number) => num * 2));

// Subscriber
mappedNumber$.subscribe(
    (num: number) => {
      console.log(num);
    }
);

numberSubject.next(2);
