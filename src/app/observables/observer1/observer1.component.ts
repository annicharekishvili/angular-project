import { Component } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { ObserverService } from '../observer.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngg-observer1',
  templateUrl: './observer1.component.html',
  styleUrl: './observer1.component.scss',
})
export class Observer1Component {
  // subscription: Subscription | null = null;
  observable: Observable<any> | null = null;

  valueSubject: Subject<number> | null = null;

  form: FormGroup<any>;

  timer = timer(0, 2000);
  constructor(
    private observerService: ObserverService,
    private fb: FormBuilder,
  ) {
    this.observable = this.observerService.valueSubject$;

    this.form = this.fb.group({
      firstNames: new FormArray([this.fb.control('', Validators.required)]),
    });
  }

  getFirstNames() {
    return (this.form?.get('firstNames') as FormArray).controls;
  }

  getFistNameasArray() {
    return this.form?.get('firstNames') as FormArray;
  }

  addInput() {
    this.getFistNameasArray().push(this.fb.control(''));
  }

  deleteInput(index: number) {
    this.getFistNameasArray().removeAt(index);
  }

  ngOnInit() {
    this.observable = this.observerService.valueSubject$;

    this.observerService.valueSubject$.subscribe(value => {
      console.log('button clicked!:', value);
    });
  }

  ngOnDestroy() {
    console.log('Observer 1 unsubscribed');
  }

  sendNames() {
    console.log(this.form.value);
  }
}
