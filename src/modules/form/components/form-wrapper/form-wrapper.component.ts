import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormWrapper } from '../../models/form-wrapper-absteact';
import { InputWrapperComponent } from "../input-wrapper/input-wrapper.component";
@Component({
  standalone: true,
  selector: 'shared-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css'],
  imports: [NgFor, ReactiveFormsModule, InputWrapperComponent]
})
export class FormWrapperComponent extends FormWrapper {









}
