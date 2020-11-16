// register: https://react-hook-form.com/api/#register
export type RegisterRequired = boolean | string;

export interface FieldRegister {
  required: RegisterRequired;
}

// input types: https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
export type FieldType = "email" | "number" | "tel" | "text" | "textarea";