import { CdkListboxModule, ListboxValueChangeEvent } from '@angular/cdk/listbox';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyValuePair } from './dropdown.types';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SwIconComponent } from '../icon/icon.component';

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
    CdkListboxModule
  ]
})
export class SwDropdownComponent implements ControlValueAccessor {

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

  public writeValue(value: string[]): void {
    this.selectedValues = value;
  }
    
  public registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }

  public onUpdateValue(updatedValue: string[]) {
    this.selectedValues = updatedValue;
    if(this.onChangeFn) {
        this.onChangeFn(this.selectedValues);
    }
  }

  public registerOnTouched(fn: Function): void {
    this.onTouchFn = fn;
  }

  public setDisabledState?(isDisabled: boolean): void { }

  public onValueChange(event: ListboxValueChangeEvent<string>) {
    this.onUpdateValue(event.value as string[]);
    this.isOpen = false;
  }

}
