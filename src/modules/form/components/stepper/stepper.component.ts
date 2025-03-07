import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-stepper',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  @Input()
  steps: string[] = [];
  @Input()
  currentStepIndex: number | null = null;

  @Output()
  clickStep: EventEmitter<number> = new EventEmitter();

  handleClickStep(stepIndex: number): void {
    this.clickStep.emit(stepIndex);
  }
}
