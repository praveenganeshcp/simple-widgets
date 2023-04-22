import { ListboxValueChangeEvent } from '@angular/cdk/listbox';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyValuePair } from '../../sw-dropdown.types';

@Component({
  selector: 'sw-dropdown-input',
  templateUrl: './sw-dropdown-input.component.html',
  styleUrls: ['./sw-dropdown-input.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwDropdownInputComponent),
        multi: true        
    }
  ]
})
export class SwDropdownInputComponent implements ControlValueAccessor {

  private _options: KeyValuePair[] = [];
  
  private _valueLabelMap: Map<string, string> = new Map();

  @Input() 
  set options(options: KeyValuePair[]) {
    this._options = options;
    this._valueLabelMap = new Map(options.map(option => [option.value, option.key]));
  }
  
  get options() {
  	return this._options;
  }

  @Input() placeholder: string = '';

  isOpen: boolean = false;

  selectedValues: string[] = [];

  onChangeFn: Function | null = null;

  onTouchFn: Function | null = null;

  get selectedValueVM() {
    return this.selectedValues ? (this.selectedValues.map(selectedValue => this._valueLabelMap.get(selectedValue)).join(', ')) : '';
  }

  constructor() { }

  writeValue(value: string[]): void {
    this.selectedValues = value;
  }
    
  registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }

  onUpdateValue(updatedValue: string[]) {
    this.selectedValues = updatedValue;
    if(this.onChangeFn) {
        this.onChangeFn(this.selectedValues);
    }
  }

  registerOnTouched(fn: Function): void {
    this.onTouchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void { }

  onValueChange(event: ListboxValueChangeEvent<string>) {
    this.onUpdateValue(event.value as string[]);
    this.isOpen = false;
  }

}
