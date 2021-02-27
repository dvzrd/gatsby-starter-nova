import React, { FC, useState } from "react";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Box,
  Form,
  FormProps,
  FormField,
  Grid,
  Section,
  SectionProps,
  Text,
  encodeData,
} from "components";
import { useContactFormQuery } from "graphql";

import styles from "./ContactForm.module.css";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  description: string;
};

export interface ContactFormProps extends Omit<SectionProps, "form"> {
  form?: FormProps;
}

export const ContactForm: FC<ContactFormProps> = ({
  className,
  form,
  is = "form",
  ...rest
}) => {
  const {
    action,
    button,
    // TODO: integrate with form builder
    // fields,
    heading,
    method,
    name,
    subheading,
  } = useContactFormQuery();
  const { register, handleSubmit, errors, formState } = useForm<FormData>();
  const [captured, setCaptured] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    if (Object.keys(data).length > 0) {
      const options = {
        method,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeData({
          "form-name": name,
          "bot-field": captured,
          ...data,
        }),
      };

      fetch("/", options)
        .then(() => window.location.assign(action))
        .catch((error) => console.error(error));
    } else {
      console.error(JSON.stringify(errors));
    }
  };

  const formProps: FormProps = {
    action,
    method,
    name,
    button,
    hasErrors: Object.keys(errors).length > 0,
    isSubmitSuccessful: formState.isSubmitSuccessful,
    ...form,
  };

  return (
    <Section
      is={is}
      {...(rest as SectionProps)}
      className={clsx(styles.section, className)}
    >
      {(heading || subheading) && (
        <Box as="figcaption">
          {heading && (
            <Text as="h1" is="title">
              {heading}
            </Text>
          )}
          {subheading && (
            <Text as="h2" is="subtitle" className={styles.subheading}>
              {subheading}
            </Text>
          )}
        </Box>
      )}
      <Form
        {...formProps}
        className={clsx(styles.form, formProps.className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value={name} />
        <div hidden>
          <input
            name="bot-field"
            onChange={(event) => setCaptured(event.target.value)}
          />
        </div>
        <Grid className={styles.grid}>
          <FormField
            className="col-span-full"
            error={errors.name}
            errorMessage="Please enter your full name"
            label="Full name"
            name="name"
            register={register({ required: true })}
          />
          <FormField
            error={errors.email}
            errorMessage="Please enter an email address"
            label="Email address"
            name="email"
            register={register({ required: true })}
            type="email"
          />
          <FormField
            error={errors.phone}
            label="Phone number"
            name="phone"
            register={register({ required: false })}
            type="tel"
          />
          <FormField
            className="col-span-full"
            error={errors.description}
            errorMessage="Please please a detailed message."
            label="Description"
            name="description"
            register={register({ required: true })}
            type="textarea"
          />
        </Grid>
      </Form>
    </Section>
  );
};
