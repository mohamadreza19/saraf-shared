import { FormControl } from "@angular/forms"

interface PhoneDep<T extends FormControl | string> {
    /**
 * Represents a phone dependency with a control , which can be a control name or a FormControl.
 */
    PreCode: T
}
interface ListDep {
    list: string[]
}

export interface InputDependency {
    /**
    Resolver Scoped to form
    */
    scoped?: {
        phone?: PhoneDep<string>
        list?: ListDep
    }

};
export interface InputComputedDependency {

    phone?: PhoneDep<FormControl>
    list?: ListDep
};




