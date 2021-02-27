import React, { FC } from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";

import {
  InputRegister,
  InputType,
  Box,
  BoxProps,
  Text,
  TextInput,
} from "components";

import styles from "./FormField.module.css";

export interface FormFieldProps extends BoxProps {
  error?: FieldError;
  errorMessage?: string;
  label?: string;
  name: string;
  register?: InputRegister;
  type?: InputType;
}

export const FormField: FC<FormFieldProps> = ({
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
  <Box {...(rest as BoxProps)} className={clsx(styles.field, className)}>
    {label && (
      <Text as="label" pattern="meta" className={styles.label} htmlFor={name}>
        {label}
      </Text>
    )}
    {children ? (
      children
    ) : (
      <TextInput name={name} register={register} type={type} />
    )}
    {error && (
      <Text pattern="meta" className={styles.error}>
        {error.message || errorMessage}
      </Text>
    )}
  </Box>
);
