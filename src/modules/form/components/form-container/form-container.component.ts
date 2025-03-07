import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainer } from '../../models/form-container.abstract';
import { FormWrapperComponent } from '../form-wrapper/form-wrapper.component';





@Component({
  standalone: true,
  selector: 'shared-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
  imports: [ReactiveFormsModule, NgIf, NgFor, FormWrapperComponent]
})
export class FormContainerComponent extends FormContainer {



}
