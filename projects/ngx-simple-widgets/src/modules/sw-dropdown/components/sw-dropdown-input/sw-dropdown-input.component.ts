import { ListboxValueChangeEvent } from '@angular/cdk/listbox';
import { Component, Input } from '@angular/core';
import { KeyValuePair } from '../../sw-dropdown.types';

@Component({
  selector: 'sw-dropdown-input',
  templateUrl: './sw-dropdown-input.component.html',
  styleUrls: ['./sw-dropdown-input.component.scss']
})
export class SwDropdownInputComponent {

  @Input() items: KeyValuePair[] = [];

  @Input() placeholder: string = '';

  isOpen: boolean = false;

  selectedValue: unknown[] = [];

  get selectedValueVM() {
    return this.selectedValue.join(', ');
  }

  constructor() { }

  onValueChange(event: ListboxValueChangeEvent<unknown>) {
    this.selectedValue = [event.value[0]];
    this.isOpen = false;
  }

}
