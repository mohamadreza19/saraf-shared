import { FormControlConfig } from "../models/form-control-config.model";
import { FormSection } from "../models/form-section.abstract";

export class FormBuilder extends FormSection {


    constructor(label: string, controlConfigs: FormControlConfig) {
        super(label, controlConfigs)
    }



}