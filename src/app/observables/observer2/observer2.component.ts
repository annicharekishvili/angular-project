import { Component } from '@angular/core';
import { ObserverService } from '../observer.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ngg-observer2',
  templateUrl: './observer2.component.html',
  styleUrl: './observer2.component.scss',
})
export class Observer2Component {
  subscription: Subscription | null = null;
  observable: Observable<any> | null = null;
  constructor(private observerService: ObserverService) {}

  ngOnInit() {
    this.observable = this.observerService.observable;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    console.log('Observer 2 unsubscribed');
  }

  onInput(event: any) {
    console.log(event.target.value);
    this.observerService.onInput(event.target.value);
  }

  onClick() {
    this.observerService.onClick();
  }
}
