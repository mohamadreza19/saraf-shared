import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TextInputComponent } from "../../../../components/inputs/text-input/text-input.component";
import { InputBase } from '../../models/input-base-abstract';


@Component({
  standalone: true,
  selector: 'shared-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.css'],
  imports: [NgIf, TextInputComponent]
})
export class InputWrapperComponent extends InputBase {



}
