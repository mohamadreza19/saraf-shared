import {
  NgClass,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ButtonComponent } from '../button/button.component';

import { NgxFileDropModule } from 'ngx-file-drop';

import { FilesInputComponent } from './files-input/files-input.component';

import { provideIcons } from '@ng-icons/core';
import { IconsModule } from '../../modules/icons.module';
import { FormControl2 } from '../form-builder2/form-builder2.component';
import { AmountInputComponent } from './amount-input/amount-input.component';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';
import { SearchSelectInputComponent } from './search-select-input/search-select-input.component';

import { matLockOutline } from '@ng-icons/material-icons/outline';
import { SharedModuleModule } from '../../modules/shared-module/shared-module.module';
import { FilesInput2Component } from './files-input2/files-input2.component';
import { MapInputComponent } from './map-input/map-input.component';
import { SelectAddComponent } from './select-add/select-add.component';
@Component({
  selector: 'app-input',

  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgPersianDatepickerModule,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgTemplateOutlet,
    IconsModule,
    NgClass,
    ButtonComponent,
    NgClickOutsideDirective,
    NgxFileDropModule,
    FilesInputComponent,
    PhoneNumberInputComponent,
    AmountInputComponent,
    SearchSelectInputComponent,
    // CommonModule,
    SharedModuleModule,
    SelectAddComponent,
    MapInputComponent,
    FilesInput2Component,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  viewProviders: provideIcons({ matLockOutline }),
})
export class InputComponent implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {
    el.nativeElement.className = 'flex items-center border-0 p-0';
  }
  _iconUrl = '/assets/icons/material-icons/solid/download.svg';
  _iconUrlImage = '/assets/icons/material-icons/solid/image.svg';

  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  // @Input() control!: FormControl2; // Pass the actual FormControl
  @Input()
  control!: FormControl2;

  @Input() className?: string; // Allow dynamic styling

  isCustomBoxOpen = false;

  ngAfterViewInit(): void {
    // if (this.control.type == 'phone-number') {
    //   setInterval(() => {
    //     this.control.markAllAsTouched();
    //     console.log(this.control);
    //   }, 2100);
    // }
    if (this.control.show$) {
      this.control.show$.subscribe((val) => {
        this.onShowChange(val);
      });
    }
    // if (!this.control.value && this.control.options && this.control.options.length) {
    //   if (typeof this.control.selectedOptionIndex === 'number')
    //     this.control.setValue(this.control.options[this.control.selectedOptionIndex]);
    //   else this.control.setValue(this.control.options[0]);
    // }
  }
  // ngOnInit(): void {
  //   // Set the default value (select the first option by default)
  //   // console.log(this.formGroupDirective);
  //   // console.log(this.control);

  //   this.control.show$.subscribe((val) => {
  //     this.onShowChange(val);
  //   });

  //   if (typeof this.control.selectedOptionIndex === 'number' && this.control.options) {
  //     if (!this.control.value) this.control.setValue(this.control.options[0]);
  //   }
  // }

  onShowChange(show: boolean) {
    // Handle logic for changes in `show`
    if (show) {
      this.el.nativeElement.classList.remove('hidden');
    } else {
      this.el.nativeElement.classList.add('hidden');
    }
  }

  openCustomBox() {
    this.isCustomBoxOpen = true;
  }
  closeCustomBox() {
    this.isCustomBoxOpen = false;
  }
  _handleSetMultiSelectItem(val: string) {
    const formControlArrValue = this.control.value;

    if (Array.isArray(formControlArrValue)) {
      if (!formControlArrValue.includes(val)) this.control.setValue([...formControlArrValue, val]);
    } else {
      this.control.setValue([val]);
    }
  }
  _handleRemoveMultiSelectItem(val: string) {
    const formControlArrValue = this.control.value;

    if (Array.isArray(formControlArrValue)) {
      const filteredArray = formControlArrValue.filter((item) => item !== val);

      this.control.setValue(filteredArray);
    }
    // console.log(this.control);
  }
  _getMultiSelectSelectedItemAsArray(val: any): string[] {
    return val as string[];
  }

  togglePassword() {
    const input = this.passwordInput.nativeElement;
    const type = this.passwordInput.nativeElement.type;

    if (type === 'password') {
      input.type = 'text';
    } else input.type = 'password';
  }
}
