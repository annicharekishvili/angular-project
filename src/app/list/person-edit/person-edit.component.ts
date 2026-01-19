import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Person } from '../person';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ngg-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.scss',
})
export class PersonEditComponent {
  @Input() person!: Person;

  @Output() save = new EventEmitter<Person | null>();

  addressForm: FormGroup;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      country: [''],
      city: [''],
    });
    this.form = this.fb.group({
      name: [''],
      lastname: [''],
      age: ['', Validators.required],
      address: this.addressForm,
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['person']) {
      this.form.patchValue(this.person);
    }
  }

  saveChanges() {
    if (this.form.valid) {
      this.save.emit({ id: this.person.id, ...this.form.value });
    }
  }

  cancelChanges() {
    this.save.emit(null);
  }
}
