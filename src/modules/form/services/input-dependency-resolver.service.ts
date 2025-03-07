import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComputedDependency, InputDependency } from '../models/input-dependency';

@Injectable({
  providedIn: 'root',
})
export class InputDependencyResolver {

  resolve(controlKey: string, formGroup: FormGroup, dependencies: InputDependency): InputComputedDependency | undefined {
    if (!formGroup.controls[controlKey]) {
      throw new Error(`Control key "${controlKey}" not found in form controls.`);
    }

    if (!dependencies?.scoped) {
      return undefined;
    }

    const computedDependencies: InputComputedDependency = {};
    const { scoped } = dependencies;

    if (scoped.phone) {
      this.resolvePhoneDependency(scoped.phone, formGroup, computedDependencies);
    }

    return computedDependencies;
  }

  private resolvePhoneDependency(
    phoneDependency: { PreCode: string },
    formGroup: FormGroup,
    computedDependencies: InputComputedDependency
  ) {
    const preCodeControlName = phoneDependency.PreCode;

    if (!formGroup.controls[preCodeControlName]) {
      throw new Error(`Dependency control "${preCodeControlName}" not found in form controls.`);
    }

    computedDependencies.phone = {
      PreCode: formGroup.controls[preCodeControlName] as FormControl,
    };
  }
}
