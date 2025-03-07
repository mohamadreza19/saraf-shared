import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBase } from '../../../modules/form/models/input-base-abstract';

@Component({
  selector: 'shared-text-input',
  templateUrl: './text-input.component.html',

  standalone: true,
  imports: [ReactiveFormsModule]
})
export class TextInputComponent extends InputBase {



}
