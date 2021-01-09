import React, { FC } from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";

import { Box, BoxProps, Text } from "components";

import styles from "./FormField.module.css";
import { FieldRegister, FieldType } from "./types";

export interface FormFieldProps extends BoxProps {
  error?: FieldError;
  errorMessage?: string;
  label?: string;
  name: string;
  register?: FieldRegister;
  type?: FieldType;
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
  <Box {...(rest as BoxProps)} className={classNames(styles.field, className)}>
    {label && (
      <Text as="label" is="meta" className={styles.label} htmlFor={name}>
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
      <Text is="meta" className={styles.error}>
        {error.message || errorMessage}
      </Text>
    )}
    {children}
  </Box>
);
