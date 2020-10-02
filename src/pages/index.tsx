import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Hero, Section } from "components";
import { DefaultLayout } from "layouts";
import { useSiteMetadata } from "graphql";

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => {
  const { defaultDescription } = useSiteMetadata();

  return (
    <DefaultLayout>
      <Hero>
        <h1 className="leading-tight text-primary-500">{defaultDescription}</h1>
      </Hero>
      <Section className="bg-background-paper">
        <p className="text-copy-paper">
          This is a page section with paper background and copy colors.
        </p>
      </Section>
      <Section as="footer" className="bg-background-primary">
        <p className="text-copy-primary">
          This is the page footer with primary background and copy colors.
        </p>
      </Section>
    </DefaultLayout>
  );
};

export default PageIndex;
