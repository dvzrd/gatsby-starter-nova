import React, { FC } from "react";
import classNames from "classnames";

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  FormProps,
  FormField,
  FormFieldProps,
  Grid,
  GridProps,
  Text,
} from "components";

import styles from "./Form.module.css";

export const renderField = (field: FormFieldProps) => {
  switch (field.type) {
    case "text":
    default:
      return <FormField {...(field as FormFieldProps)} />;
  }
};

export const encodeData = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export const Form: FC<FormProps> = ({
  as = "form",
  actions,
  button = "Submit",
  buttonProps,
  children,
  errorMessage = "Fill out all the required fields and try again.",
  hasErrors,
  isSubmitSuccessful,
  method,
  name,
  netlify = "true",
  netlifyHoneypot = "bot-field",
  successMessage,
  onSubmit,
  ...rest
}) => {
  return (
    <Box
      as={as}
      data-netlify={netlify}
      data-netlify-honeypot={netlifyHoneypot}
      name={name}
      method={method}
      onSubmit={onSubmit}
      {...(rest as BoxProps)}
    >
      {children}
      {button && (
        <Grid
          {...(actions as GridProps)}
          className={classNames(styles.actions, actions?.className)}
        >
          {isSubmitSuccessful
            ? successMessage && (
                <Text className={styles.successMessage}>{successMessage}</Text>
              )
            : errorMessage &&
              hasErrors && (
                <Text className={styles.errorMessage}>{errorMessage}</Text>
              )}
          <Button
            color="primary"
            type="submit"
            {...(buttonProps as ButtonProps)}
          >
            {button}
          </Button>
        </Grid>
      )}
    </Box>
  );
};
