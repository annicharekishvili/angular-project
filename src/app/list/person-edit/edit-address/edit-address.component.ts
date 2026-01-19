import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngg-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.scss',
})
export class EditAddressComponent {
  @Input() addressForm!: FormGroup;
}
