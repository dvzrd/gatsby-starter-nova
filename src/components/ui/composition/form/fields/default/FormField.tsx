import React, { FC } from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";

import { Pattern, PatternProps, Text } from "components";

import styles from "./FormField.module.css";
import { FieldRegister, FieldType } from "./types";

export interface FormFieldProps extends PatternProps {
  error?: FieldError;
  errorMessage?: string;
  label?: string;
  name: string;
  register?: FieldRegister;
  type?: FieldType;
}

export const FormField: FC<FormFieldProps> = ({
  is = "field",
  children,
  className,
  error,
  errorMessage = "This field is required",
  label,
  name,
  register,
  type = "text",
  ...rest
}) => (
  <Pattern
    is={is}
    {...(rest as PatternProps)}
    className={classNames(styles.field, className)}
  >
    {label && (
      <Text as="label" pattern="meta" className={styles.label} htmlFor={name}>
        {label}
      </Text>
    )}
    <input
      className={classNames("p-2 md:p-3 xl:p-4", styles.input)}
      name={name}
      ref={register}
      type={type}
    />
    {error && (
      <Text pattern="meta" className={styles.error}>
        {error.message || errorMessage}
      </Text>
    )}
    {children}
  </Pattern>
);
