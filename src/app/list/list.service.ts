import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class ListService {
  private _persons: Person[] = [
    {
      id: 0,
      name: 'John',
      lastname: 'Doe',
      age: null,
      address: {
        country: 'USA',
        city: 'New York',
      },
    },
    {
      id: 1,
      name: 'Jane',
      lastname: 'Smith',
      age: 20,
      address: {
        country: '',
        city: '',
      },
    },
    {
      id: 2,
      name: 'Alex',
      lastname: 'Johnson',
      age: 25,
      address: {
        country: '',
        city: '',
      },
    },
    {
      id: 3,
      name: 'Emily',
      lastname: 'Brown',
      age: 35,
    },
  ];

  filteredPersons: Person[] = this._persons;

  constructor() {}

  deletePerson(id: number) {
    this._persons = this._persons.filter(person => person.id != id);
    this.filteredPersons = this._persons;
  }

  searchPersons(query: string) {
    this.filteredPersons = this._persons.filter(
      person =>
        person.name.toLowerCase().includes(query) ||
        person.lastname.toLowerCase().includes(query)
    );
  }

  getPersonById(id: number): Person {
    return this._persons.filter(person => person.id === id)[0];
  }

  updatePerson(Person: Person) {
    this._persons = this._persons.map(persons =>
      persons.id === Person.id ? Person : persons
    );
    this.filteredPersons = this._persons;
  }
}
