import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Helper } from "../utils/helper.util";
import { CustomFormGroup } from "./custom-form-group.model";
import { FormSection } from "./form-section.abstract";

@Component({
    template: ''
})

export abstract class FormWrapper implements OnInit {
    @Input() formSection!: FormSection
    formGroup!: CustomFormGroup
    @Output() formCreated = new EventEmitter<CustomFormGroup>()
    helper = Helper

    ngOnInit() {

        this.formGroup = this.formSection.createForm()
    }

}