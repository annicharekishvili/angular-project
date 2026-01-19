import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListService } from './list.service';
import { Person } from './person';
import { tap } from 'rxjs';

@Component({
  selector: 'ngg-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  get persons() {
    return this.listService.filteredPersons;
  }

  searchControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  currentPerson: Person | null = null;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        tap(value => {
          this.listService.searchPersons(value);
        })
      )
      .subscribe();
  }

  deletePerson(id: number) {
    this.listService.deletePerson(id);
  }

  editPerson(id: number) {
    this.currentPerson = this.listService.getPersonById(id);
  }

  saveChanges(person: Person | null) {
    console.log(person);
    if (person) {
      this.listService.updatePerson(person);
    }
    this.currentPerson = null;
  }
}
