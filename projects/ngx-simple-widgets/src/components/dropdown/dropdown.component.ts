import { CdkListboxModule, ListboxValueChangeEvent } from '@angular/cdk/listbox';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyValuePair } from './dropdown.types';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SwIconComponent } from '../icon/icon.component';
import { SwInputComponent } from "../input/input.component";
import { SwAllowedSizes } from "../../shared/constants";

@Component({
  selector: 'sw-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwDropdownComponent),
        multi: true        
    }
  ],
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    SwIconComponent,
    CdkListboxModule,
    SwInputComponent
  ]
})
export class SwDropdownComponent implements ControlValueAccessor {

  @Input() 
  set options(options: KeyValuePair[]) {
    this._options = options;
    this.filteredOptions = options;
    this._valueLabelMap = new Map(options.map(option => [option.value, option.key]));
  }

  @Input() placeholder: string = '';

  @Input() size: SwAllowedSizes = "md";

  private _options: KeyValuePair[] = [];

  public filteredOptions: KeyValuePair[] = [];
  
  private _valueLabelMap: Map<string, string> = new Map();

  public isOpen: boolean = false;

  public selectedValues: string[] = [];

  public onChangeFn: Function | null = null;

  public onTouchFn: Function | null = null;

  constructor() { }

  get options() {
    return this._options;
  }

  get selectedValueVM() {
    return this.selectedValues ? (this.selectedValues.map(selectedValue => this._valueLabelMap.get(selectedValue)).join(', ')) : '';
  }

  public writeValue(value: string[]): void {
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

  public onValueChange(event: ListboxValueChangeEvent<string>) {
    this.onFilterOptions("");
    this.onUpdateValue(event.value as string[]);
    this.isOpen = false;
  }

  public onFilterOptions(searchTerm: string): void {
    if(searchTerm.length) {
      this.isOpen = true;
    }
    this.filteredOptions = this._options.filter((option) => {
      return option.key.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

  public trackDropdownOption(index: number, option: KeyValuePair) {
    return option.key;
  }

}
