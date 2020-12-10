import { Observable, Subscriber } from 'rxjs';
import { share } from 'rxjs/operators';

// Najprostszy typ generyczny w TS:
const numbers: Array<number> = [1, 2, 3, 4];
const numbers2: number[] = [1, 2, 3, 4];

// PROVIDER:
const observable = new Observable<number>((subscriber: Subscriber<number>) => {
    subscriber.next(1);
    subscriber.next(2);
    setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
    }, 1500);
}) //.pipe(share());
// share() zmienia zachowanie domyślne z cold na hot !!!!

// cold = cała logika od początku tak jak jest zdefiniowana w new Observable

// hot = bardziej jak Event emitter - jak się spóźniłeś to nie dostajesz wartości.

// CONSUMER:
observable.subscribe((num: number) => {
    console.log(num);
});

setTimeout(() => {

  // CONSUMER #2:
  observable.subscribe((num: number) => {
    console.log('#2',  num);
  });

}, 1300);









// Podobnie jak przy PROMISE:
// PROVIDER:
const promise = new Promise<number>((resolve) => {
    resolve(1);
});

// CONSUMER:
promise
    .then((num: number) => {
        // console.log(num);
    });

