import { InputDependency } from "./input-dependency"

export interface FormControlConfig {
  [key: FormControlName]: FieldConfig
}


export interface FieldConfig {
  label: string
  defaultValue?: any
  type: FieldType
  validators?: any[]
  dependencies?: InputDependency
}


type FormControlName = string

type FieldType = 'text' | 'none' | 'number'