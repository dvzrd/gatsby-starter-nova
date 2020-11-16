import React, { FC } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { Pattern, PatternProps, Text } from "components";

import styles from "./TextField.module.css";

export interface TextFieldProps extends PatternProps {
  error?: string;
  label?: string;
  name: string;
}

export const TextField: FC<TextFieldProps> = ({
  children,
  className,
  error,
  label,
  name,
}) => {
  const { register, errors } = useForm();

  return (
    <Pattern is="field" className={classNames(styles.field, className)}>
      {label && (
        <Text as="label" pattern="meta" className={styles.label} htmlFor={name}>
          {label}
        </Text>
      )}
      <input
        className={classNames("p-2 md:p-3 xl:p-4", styles.input)}
        name={name}
        ref={register({ required: true })}
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
