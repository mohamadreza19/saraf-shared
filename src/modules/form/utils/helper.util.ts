import { AbstractControl, FormControl } from "@angular/forms";

export class Helper {

    static makeControlsKeyIterable(controls: {
        [key: string]: AbstractControl<any>;
    }) {

        return Object.keys(controls)
    }

    static asFormControl(control: any): FormControl {
        return control
    }

}