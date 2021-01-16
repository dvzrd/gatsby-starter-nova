import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Form, FormProps, FormField, Grid, Text } from "components";

// Reference: https://codesandbox.io/s/xrjv48o0qp?file=/src/index.js:552-564

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type FormData = {
  username: string;
  lastname: string;
  email: string;
};

export const SampleForm: FC<FormProps> = (props: FormProps) => {
  const { register, handleSubmit, errors, formState } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    await sleep(2000);
    if (data?.username) {
      console.log(JSON.stringify(data));
    } else {
      console.error(JSON.stringify(errors));
    }
  };

  return (
    <Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Username"
        name="username"
        error={errors.username}
        register={register({ required: true })}
      />
      <FormField
        label="Last name"
        name="lastname"
        error={errors.lastname}
        register={register}
      />
      <FormField
        label="Email"
        name="email"
        error={errors.email}
        register={register}
      />
      <Grid
        className="col-span-full mt-4"
        display="flex"
        alignItems="center"
        justifyContent="between"
      >
        {formState.isSubmitSuccessful ? (
          <Text className="text-service-pass">
            Form data submitted, check your console.
          </Text>
        ) : (
          <Text className="text-service-fail">
            {Object.keys(errors).length > 0 &&
              "Fill out all the required fields and try again."}
          </Text>
        )}
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </Form>
  );
};
