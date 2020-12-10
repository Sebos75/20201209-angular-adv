import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

// PROVIDER:
const isLoggedIn$ = new Observable(subscriber => {
	subscriber.next(true);
  // subscriber.next(20);

  // subscriber.error(new Error('OH NO !'));
  subscriber.next(false);

  setTimeout(() => {
    subscriber.next(false);
  }, 500)

  // subscriber.complete();
});



const presentSadFace$ = isLoggedIn$.pipe(map((v) => v ? '😊' : '😥'))

isLoggedIn$.pipe(take(1)).subscribe(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  },
  () => {
    console.log('I am completed !');
  }
)

// CONSUMER:
isLoggedIn$.subscribe(num => {
	console.log(num)
})

// Reguła biznesowa:
// Wyświetl uśmiech jesli zalgowany
// a Jeśli nie to smutą buźkę.

// COMPONENT nr #2
presentSadFace$.subscribe(face => {
	  console.log(face)
  })

presentSadFace$.subscribe(num => {
	console.log(num)
})


// console.log(1 + 3);

// function ok() {
//   console.log('hello')
// }
// ok();
// throw new Error('!');
// Podobnie jak przy PROMISE:
// PROVIDER:
const promise = new Promise(resolve => {
	resolve(1)
});

// CONSUMER:
// promise
// 	.then(num => {
// 		console.log(num)
//   })
//   .then(num => {
//     console.log(num)
//     return 'HELLO';
//   })
//   .then(num => {
//     console.log(num)
//     return Promise.resolve('*@&@#')
//   })
//   .then(num => {
//     throw new Error('OH NO !')
// 		console.log(num)
//   })
//   .then(num => {
// 		console.log(num)
//   })
//   .then(num => {
// 		console.log(num)
//   })
//   .then(num => {
// 		console.log(num)
//   })
//   .then(num => {
// 		console.log(num)
//   })
//   .catch((err) => {
//       console.log(err);
//   })
