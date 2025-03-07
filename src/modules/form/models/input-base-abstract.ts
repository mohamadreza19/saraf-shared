import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FieldConfig } from "./form-control-config.model";
import { InputComputedDependency } from "./input-dependency";

@Component({
    template: 'undefined'
})
export abstract class InputBase {
    @Input() control!: FormControl
    @Input() config!: FieldConfig | undefined
    @Input() computedDependencies!: InputComputedDependency | undefined

}