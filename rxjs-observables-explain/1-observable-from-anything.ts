import {of, from} from 'rxjs';

const vegetable = 'tomato';
const fruits = ['apples', 'bananas', 'mangoes', 'cherries'];

const vegetable$ = of(vegetable);
const fruit$ = from(fruits);

fruit$.subscribe(
    (vege: string) => {
      console.log(vege);
    },
    (err: Error) => {
      console.error(err.message);
    },
    () => {
      console.log('Stream completed !');
    }
);

vegetable$.subscribe(
  {
    next(vege: string): void {
      console.log(vege);
    },
    error(err: Error): void {
      console.log(err);
    },
    complete(): void {
      console.log('Stream completed !');
    }
  }
);

