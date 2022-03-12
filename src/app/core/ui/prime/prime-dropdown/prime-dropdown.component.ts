import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';

@Component({
  selector: 'app-prime-dropdown',
  templateUrl: './prime-dropdown.component.html',
  styleUrls: ['./prime-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PrimeDropdownComponent),
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimeDropdownComponent),
      multi: true,
    },
  ],
})
export class PrimeDropdownComponent<T> implements ControlValueAccessor, Validator, OnInit {
  @Input() items;
  @Input() placeholder = 'Выбрать';
  @Input() filter: boolean;
  @Input() virtualScroll = false;
  @Input() appendToBody = false;
  @Input() required = false;
  @Input() defaultStyle = false;
  @Input() scrollHeight = 200;
  @Input() clearable = false;
  @Input() showHeader = true;
  @Input() appendTo = '';
  @Input() panelStyle = {};
  @Input() style = {};
  @Input() disabled = false;
  @Input() value;
  @Input() showToggleAll = true;
  @Input() multiSelect = false;
  @Input() sort = false;
  @Input() error: string;
  @Input() title: string;

  @Output() valueChange = new EventEmitter();

  public isValid = false;
  public isTouched = false;
  public wasValidated = false;
  public errorMessage = '';
  public emptyMessage = 'Ничего не найдено';
  private errorMessages = {
    required: 'Поле обязательно для заполнения',
  };
  readonly emptyFilterMessage = 'Ничего не найдено';
  constructor() {}

  public propagateChange: any = () => {};
  public propagateTouch: any = () => {};

  ngOnInit() {
    if (!!this.appendToBody) {
      this.appendTo = 'body';
      this.style = { overflow: 'hidden' };
      this.panelStyle = { width: '245px' };
    }

    if (this.multiSelect && !this.filter) this.filter = true;
  }

  onValueChange(value): void {
    if (this.multiSelect && value instanceof Array) {
      value.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      });
    }
    this.valueChange.next(value);
    this.propagateChange(value);
  }

  get selectedItemsLabel(): string {
    return `Выбрано ({0})`;
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this.value = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  validate(control: AbstractControl): ValidationErrors {
    setTimeout(() => {
      this.setErrors(control.errors);
    });
    this.wasValidated = true;
    return null;
  }

  public setErrors(errors: ValidationErrors | null): void {
    if (errors === null || !this.isTouched) {
      this.valid();
      return;
    }

    if (errors.required) {
      this.invalid('required');
    }

    if (errors.customError) {
      this.invalid(this.error);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public valid(): void {
    this.isValid = true;
    this.errorMessage = '';
  }

  public invalid(error: string): void {
    this.isValid = false;
    this.errorMessage = this.errorMessages[error] ? this.errorMessages[error] : error;
  }
}
