import { FormGroup } from "@angular/forms";

export class CustomFormGroup extends FormGroup {
    constructor(public label: string, controls: any) {
        super(controls)
    }
}