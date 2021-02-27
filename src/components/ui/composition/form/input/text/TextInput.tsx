import React, { FC } from "react";
import clsx from "clsx";

import { InputProps, Box, BoxProps } from "components";

import styles from "./TextInput.module.css";

export interface TextInputProps extends InputProps {
  rows?: number;
}

export const TextInput: FC<TextInputProps> = ({
  as = "input",
  className,
  name,
  register,
  rows = 5,
  type = "text",
  ...rest
}) => {
  if (type === "textarea") {
    return (
      <Box
        as="textarea"
        name={name}
        innerRef={register}
        rows={rows}
        {...(rest as BoxProps)}
        className={clsx(styles.input, className)}
      />
    );
  }

  return (
    <Box
      as={as}
      name={name}
      innerRef={register}
      type={type}
      {...(rest as BoxProps)}
      className={clsx(styles.input, className)}
    />
  );
};
