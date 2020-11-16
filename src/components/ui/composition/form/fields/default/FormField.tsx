import React, { FC } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { Pattern, PatternProps, Text } from "components";

import styles from "./FormField.module.css";
import { FieldType } from "./types";

export interface FormFieldProps extends PatternProps {
  error?: string;
  label?: string;
  name: string;
  type?: FieldType;
}

export const FormField: FC<FormFieldProps> = ({
  is = "field",
  children,
  className,
  error,
  label,
  name,
  type = "text",
  ...rest
}) => {
  const { register, errors } = useForm();

  return (
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
        ref={register({ required: true })}
        type={type}
      />
      {errors[name] && (
        <Text pattern="meta" className={styles.error}>
          {error}
        </Text>
      )}
      {children}
    </Pattern>
  );
};
