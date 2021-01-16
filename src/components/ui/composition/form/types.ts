import { SubmitHandler } from "react-hook-form";

import { ButtonProps, BoxProps, GridProps } from "components";

// register: https://react-hook-form.com/api/#register
// TODO: define types for register function
export type InputRegister = (reg: any) => void;

// input types: https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
export type InputType =
  | "email"
  | "number"
  | "tel"
  | "text"
  | "textarea"
  | string;

export interface InputProps<Input extends HTMLElement = HTMLInputElement>
  extends Omit<BoxProps<Input>, "register" | "type"> {
  register?: (reg: any) => void;
  type?: InputType;
}

export interface FormProps extends BoxProps {
  actions?: GridProps;
  button?: boolean | string;
  buttonProps?: ButtonProps;
  className?: string;
  errorMessage?: boolean | string;
  hasErrors?: boolean;
  isSubmitSuccessful?: boolean;
  method?: string;
  name?: string;
  netlify?: "true" | "false";
  netlifyHoneypot?: "bot-field" | string;
  successMessage?: boolean | string;
  onSubmit?: SubmitHandler<any>;
}

export type SelectOption = {
  label?: string;
  value: number | string;
};
