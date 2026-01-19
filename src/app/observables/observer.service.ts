import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  delay,
  from,
  interval,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
  toArray,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObserverService {
  private $valueSubject = new Subject<number>();
  valueSubject$ = this.$valueSubject.asObservable();

  constructor() {
    // setTimeout(() => {
    //   this.$valueSubject.next(1);
    // }, 3000);
    // setTimeout(() => {
    //   this.$valueSubject.next(3);
    // }, 5000);
  }

  // observable = new Observable(subscriber => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 5000);
  // });

  observable = of(1, 2, 3, 4, 5).pipe(
    delay(5000),
    toArray(),
    map((value: any) => value.map((x: any) => x + 10)),
    switchMap((arr: any) => from(arr)),
    tap(value => console.log(value)),
  );

  onInput(value: number) {
    this.$valueSubject.next(value);
  }

  onClick() {
    this.$valueSubject.next(10);
  }

  // observable = interval(300).pipe(tap(value => console.log(value)));
}
