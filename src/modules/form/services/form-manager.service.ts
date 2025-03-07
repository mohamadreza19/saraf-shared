import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CustomFormGroup } from '../models/custom-form-group.model';
import { FormSection } from '../models/form-section.abstract';
import { InputDependencyResolver } from './input-dependency-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class FormManager {
  formSections$
    = new BehaviorSubject(new Map<string, FormSection>())

  viewFormArray = new BehaviorSubject(new FormArray<CustomFormGroup>([]))

  private submissionContext = new Map<string, any>();

  status: 'add' | 'mutate' = 'add'

  constructor(public inputDependencyResolver: InputDependencyResolver) {

  }

  registerSection(section: FormSection) {
    section.fm = this
    const updateValue = this.formSections$.getValue().set(section.label, section)
    this.formSections$.next(updateValue)
  }
  getSection(label: string): FormSection | undefined {

    return this.formSections$.getValue().get(label)


  }
  deleteSection(label: string) {
    const updateValue = this.formSections$.getValue()

    updateValue.delete(label)
    this.formSections$.next(updateValue)
  }

  collectRenderedFormGroup(formGroup: CustomFormGroup) {

    const update = this.viewFormArray.getValue()

    update.push(formGroup)

    this.viewFormArray.next(update)

  }
  async submitAll() {
    // const submissionOrder = this.dependencyResolver.resolveOrder(
    //   Array.from(this.formSections.values())
    // );

    // for (const section of submissionOrder) {
    //   try {
    //     if (!section.form.valid) continue;

    //     const dependencies = this.dependencyResolver.getDependencies(
    //       section.key,
    //       this.submissionContext
    //     );

    //     const result = await section.submit(dependencies);
    //     this.submissionContext.set(section.key, result);
    //   } catch (error) {
    //     this.errorHandler.handle(error, section);
    //     throw error; // Propagate error to caller
    //   }
    // }

    // return this.submissionContext;
  }
}
