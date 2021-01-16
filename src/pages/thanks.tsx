import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Link, Section, SectionProps, Text } from "components";
import { FormLayout, FormLayoutProps } from "layouts";

const PageThanks: FC<PageProps> = () => {
  const page = "page-thanks";

  const layoutProps: FormLayoutProps = {
    on: page,
  };

  const sectionProps: SectionProps = {
    mod: "transparent",
  };

  return (
    <FormLayout {...layoutProps}>
      <Section {...sectionProps}>
        <Text as="h1" is="title">
          Thanks for contacting us!
        </Text>
        <Text as="h2" is="subtitle" className="my-4">
          We have the form data but we'll need some time to get to it. Give us a
          day or two to reach out to you.
        </Text>
        <Link
          to="/"
          is="button"
          button="default"
          buttonProps={{ color: "primary" }}
        >
          Take me home!
        </Link>
      </Section>
    </FormLayout>
  );
};

export default PageThanks;
