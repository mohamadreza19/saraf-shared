
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormManager } from "../services/form-manager.service";
import { CustomFormGroup } from "./custom-form-group.model";
import { FormControlConfig } from "./form-control-config.model";

export abstract class FormSection {

    fm!: FormManager

    // protected abstract apiConfig: any;

    constructor(public label: string, public controlsConfig: FormControlConfig) {

    }

    protected setFormManager(fm: FormManager) {
        this.fm = fm
    }

    createForm() {
        if (!Object.keys(this.controlsConfig).length) throw Error('Control Configs is empty')

        let formControls: any = {}

        for (const key in this.controlsConfig) {
            const defaultValue = this.controlsConfig[key].defaultValue || null
            const validators = this.controlsConfig[key].validators || []
            formControls[key] = new FormControl(defaultValue, validators)
        }

        return new CustomFormGroup(this.label, formControls)
    }
    getControlConfig(controlKey: string) {

        return this.controlsConfig[controlKey]

    }
    resolveInputDependency(controlKey: string, formGroup: FormGroup) {
        if (controlKey in this.controlsConfig) throw Error('controlKey not found in controlsConfig')
        const config = this.controlsConfig[controlKey]
        if (config.dependencies)
            return this.fm.inputDependencyResolver.resolve(controlKey, formGroup, config.dependencies)
        else return undefined
    }
    protected afterViewInitiate(controls: any) {


    }
    protected afterFormArrayInitiate(formArray: FormArray) { }
    // protected abstract setupDependencies(): void;
    // protected abstract transformPayload(context: any): any;
    // protected abstract handleSuccess(response: any): void;
    // protected abstract handleError(error: any): void;
}