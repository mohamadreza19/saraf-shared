import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CustomFormGroup } from "./custom-form-group.model"
import { FormSection } from "./form-section.abstract"


@Component({
    template: ''
})
export abstract class FormContainer {
    @Input({ required: true }) formSections!: Map<string, FormSection> | null

    @Output() collectFormGroup = new EventEmitter<CustomFormGroup>()

    init() {

    }







}
